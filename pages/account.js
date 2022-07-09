import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button, Card, CardContent } from '@mui/material'
import { Tab } from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab'
import utilStyles from '../css/utils.module.css'
import {
  createNewUserProfile,
  getUserData,
  uidProfileExists
} from '../firebase_utils/account_utils'
import { useAuthContext } from '../contexts/auth'
import { ProfileContext, useProfileContext } from '../contexts/profile'
import Subscriptions from '../components/account/subscriptions'
import ActionNotification from '../components/actionNotification'

export async function getStaticProps() {
  return {
    props: {
      protected: true,
      showLogout: true,
    }
  }
}

export default function UserAccount() {
  const route = useRouter()
  const user = useAuthContext()
  const { profile, setProfile } = useProfileContext()
  const [tabValue, setTabValue] = useState("checkmateTab")

  if (!user) {
    route.push("/login")
    return <></>
  } else {
    console.log("PROFILE CONTEXT ON ACCOUNT.js: ", profile)
    console.log("AUTH CONTEXT: ", user)

    if (!uidProfileExists(user)) {
      createNewUserProfile(user)
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
              <Tab value="checkmateTab" label="My Checkmates" />
              {/* <Tab value="alertTab" label="Alert send" /> */}
              <Tab value="settingsTab" label="Settings" />
              <Tab value="helpTab" label="Help center" />
            </TabList>
          </Box>

          <TabPanel value="checkmateTab">
            <Typography variant="h6">My checkmates</Typography>
            <Subscriptions></Subscriptions>
          </TabPanel>
          <TabPanel value="alertTab">
            <Card>
              <CardContent>
                <Typography variant="h6">List of sending alerts</Typography>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value="settingsTab">
            <Card>
              <CardContent>
                <Typography variant="h6">Settings</Typography>
                <Typography variant="body1">Email: {user.email}</Typography>
                <Typography variant="body1">End subscription</Typography>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value="helpTab">
            <Card>
              <CardContent>
                <Typography variant="h6">Help center</Typography>
                <Typography variant="body1">list</Typography>
              </CardContent>
            </Card>
          </TabPanel>
        </TabContext>

      </>
    )
  }
}
