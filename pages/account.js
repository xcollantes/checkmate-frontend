import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Card, Grid } from '@mui/material'
import { useAuthState } from 'react-firebase-hooks/auth'
import utilStyles from '../css/utils.module.css'
import { firebaseApp, firebaseAuth } from '../firebaseApp'
import { UserContext, useUserContext } from '../contexts/user'
import Loading from '../components/loading'
import { createNewUserProfile, getUserData, uidProfileExists } from '../firebase_utils/account_utils'

export async function getStaticProps() {
  return {
    props: { protected: true }
  }
}

export default function UserAccount(pageProps) {
  const route = useRouter()
  const userContext = useUserContext()

  if (!userContext) {
    route.push("/login")
  }

  if (!uidProfileExists(userContext)) {
    createNewUserProfile(userContext)
  }

  return (
    <>
      <Box sx={{ mt: "3rem" }}>
        {userContext &&
          <Typography variant="h2" className={utilStyles.subheaderLogo}>
            Welcome{userContext.displayName && ' ' + userContext.displayName}!
          </Typography>
        }
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={6}><Card># List of alerts for userContext</Card></Grid>
        <Grid item xs={6}><Card># My settings</Card></Grid>
        <Grid item xs={6}><Card># userContext info</Card></Grid>
        <Grid item xs={6}><Card># Learn how this works</Card></Grid>
      </Grid>

      {/* debug section */}
      <Box>
        <Typography variant="body1">userContext: {userContext.uid}</Typography>
        <Typography variant="body1">userContext: {userContext.email}</Typography>
        <Typography variant="body1">userContext: {userContext.phoneNumber}</Typography>
        <Typography variant="body1">userContext: {userContext.displayName}</Typography>
        <Typography variant="body1">userContext: {userContext.email}</Typography>
        <Typography variant="body1">userContext: {userContext.providerId}</Typography>
        <Typography variant="body1">userContext: {userContext.profileURL}</Typography>
        <Typography variant="body1">userContext: {userContext.providerId}</Typography>
      </Box>

    </>
  )
}
