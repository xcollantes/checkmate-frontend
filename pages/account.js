import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Card, CardContent } from '@mui/material'
import { Tab } from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab'
import utilStyles from '../css/utils.module.css'
import {
  createNewUserProfile,
  getUserData,
  uidProfileExists
} from '../firebase_utils/account_utils'
import { useAuthContext } from '../contexts/auth'
import { useProfileContext } from '../contexts/profile'
import Loading from '../components/loading'
import { useState } from 'react'

export async function getStaticProps() {
  return {
    props: { protected: true, showLogout: true }
  }
}

export default function UserAccount() {
  const route = useRouter()
  const user = useAuthContext()
  const { profile, setProfile } = useProfileContext()
  const [tabValue, setTabValue] = useState("tabZero")


  if (!user) {
    route.push("/login")
    return <></>
  } else {
    setProfile("SOME TEXT FPROFILE VALUE")
    console.log("PROFILE CONTEXT: ", profile)
    console.log("AUTH CONTEXT: ", user)

    if (!uidProfileExists(user)) {
      createNewUserProfile(user)
    }

    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    const handleTabChange = (event, newTabValue) => { setTabValue(newTabValue) }

    return (
      <>
        <Box sx={{ mt: "3rem" }}>
          {user &&
            <Typography variant="h1" className={utilStyles.subheaderLogo}>
              Welcome{user.displayName && ' ' + user.displayName}!
            </Typography>
          }
        </Box>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleTabChange} variant="fullWidth" textColor="secondary" indicatorColor="secondary">
              <Tab value="tabZero" label="My Checkmates" />
              <Tab value="tabOne" label="Alert send" />
              <Tab value="tabTwo" label="Settings" />
              <Tab value="tabThree" label="Help center" />
            </TabList>
          </Box>

          <TabPanel value="tabZero">
            {/* <Card>
              <CardContent> */}
            <Typography variant="h6">My Checkmates</Typography>
            <Typography variant="body1">list</Typography>
            {/* </CardContent>
            </Card> */}
          </TabPanel>
          <TabPanel value="tabOne">
            <Card>
              <CardContent>
                <Typography variant="h6">List of sending alerts</Typography>
                <Typography variant="body1">list</Typography>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value="tabTwo">
            <Card>
              <CardContent>
                <Typography variant="h6">Settings</Typography>
                <Typography variant="body1">list</Typography>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value="tabThree">
            <Card>
              <CardContent>
                <Typography variant="h6">Help center</Typography>
                <Typography variant="body1">list</Typography>
              </CardContent>
            </Card>
          </TabPanel>
        </TabContext>

        {/* debug section */}
        <Box>
          <Typography variant="body1">userContext: {user.uid}</Typography>
          <Typography variant="body1">userContext: {user.email}</Typography>
          <Typography variant="body1">userContext: {user.email}</Typography>
        </Box>
      </>
    )
  }
}
