import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Card, Grid } from '@mui/material'
import utilStyles from '../css/utils.module.css'
import {
  createNewUserProfile,
  getUserData,
  uidProfileExists
} from '../firebase_utils/account_utils'
import { useAuthContext } from '../contexts/auth'
import { useProfileContext } from '../contexts/profile'

export async function getStaticProps() {
  return {
    props: { protected: true }
  }
}

export default function UserAccount() {
  const route = useRouter()
  const user = useAuthContext()
  const { profile, setProfile } = useProfileContext()

  if (!user) {
    route.push("/login")
  }
  setProfile("SOME TEXT FPROFILE VALUE")
  console.log("PROFILE CONTEXT: ", profile)
  console.log("AUTH CONTEXT: ", user)

  if (!uidProfileExists(user)) {
    createNewUserProfile(user)
  }

  // if (authContext && !authContext) {
  //   user.setProfile(getUserData(user.user))
  // }


  return (
    <>
      <Box sx={{ mt: "3rem" }}>
        {user &&
          <Typography variant="h2" className={utilStyles.subheaderLogo}>
            Welcome{user.displayName && ' ' + user.displayName}!
          </Typography>
        }
      </Box>
      <Box>PROFILE: {profile}</Box>
      <Grid container spacing={3}>
        <Grid item xs={6}><Card># List of alerts for userContext</Card></Grid>
        <Grid item xs={6}><Card># My settings</Card></Grid>
        <Grid item xs={6}><Card># userContext info</Card></Grid>
        <Grid item xs={6}><Card># Learn how this works</Card></Grid>
      </Grid>

      {/* debug section */}
      <Box>
        <Typography variant="body1">userContext: {user.uid}</Typography>
        <Typography variant="body1">userContext: {user.email}</Typography>
        <Typography variant="body1">userContext: {user.email}</Typography>
      </Box>

    </>
  )
}
