import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Card, CardContent, Tab, Typography } from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab'
import utilStyles from '../css/utils.module.css'
import {
  createNewUserProfile,
  uidProfileExists
} from '../firebase_utils/account_utils'

import { useAuthContext } from '../contexts/auth'
import { useProfileContext } from '../contexts/profile'

import Subscriptions from '../components/account/subscriptions'
import UserSettings from '../components/account/user_settings'

import { getUserProfile } from '../firebase_utils/account_utils'
import { addSub } from '../firebase_utils/subscriptions_utils'

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
  // const { profile, setProfile } = useProfileContext()
  const [tabValue, setTabValue] = useState("checkmateTab")
  // const [localProfile, setLocalProfile] = useState(0)

  if (!user) {
    route.push("/login")
    return <></>
  } else {
    console.log("AUTH CONTEXT: ", user)

    // Use THEN because uidProfileExists() returns Promise and won't evaluate 
    uidProfileExists(user.uid).then(exists => {
      if (!exists) {
        createNewUserProfile(user)
      }
    })

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
            <TabList onChange={handleTabChange} variant="fullWidth"
              textColor="secondary" indicatorColor="secondary">
              <Tab value="checkmateTab" label="My Checkmates" />
              {/* <Tab value="alertTab" label="Alert send" /> */}
              <Tab value="settingsTab" label="Settings" />
              <Tab value="helpTab" label="Help center" />
            </TabList>
          </Box>

          <TabPanel value="checkmateTab">
            <Subscriptions userId={user.uid}></Subscriptions>
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
                <UserSettings></UserSettings>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value="helpTab">
            <Card>
              <CardContent>
                <Typography variant="body1">list</Typography>
              </CardContent>
            </Card>
          </TabPanel>
        </TabContext>

      </>
    )
  }
}
