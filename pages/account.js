import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Card, CardContent, Tab, Typography } from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab'
import utilStyles from '../css/utils.module.css'

import Subscriptions from '../components/account/subscriptions'
import UserSettings from '../components/account/user_settings'

import { useAuthContext } from '../contexts/auth'
import { useProfileContext } from '../contexts/profile'

import {
  createNewUserProfile,
  getDisplayName,
  getUserProfile,
  uidProfileExists
} from '../firebase_utils/account_utils'

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
  const [tabValue, setTabValue] = useState("checkmateTab")

  console.log("USER: ", user)
  if (!user) {
    route.push("/login")
    return <></>
  } else {
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
              Welcome{getDisplayName(user.displayName,
                "firstname", "lastname", true)}!
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
