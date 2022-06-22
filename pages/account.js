import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import '@fontsource/carter-one'
import Typography from '@mui/material/Typography'
import utilStyles from '../css/utils.module.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseAuth } from '../firebaseApp'
import { useUserContext } from '../contexts/user'
import BaseLayout from '../components/base'


export async function getStaticProps(context) {
  return {
    props: { protected: true }
  }
}

export default function UserAccount() {
  const user = useUserContext()

  return (
    <>
      {user &&
        <Box sx={{ mt: "3rem" }}>
          <Typography variant="h2">
            Welcome{user.displayName && ' ' + user.displayName}!
          </Typography>
          <div className={utilStyles.subheaderLogo}>{user.email}</div>
        </Box>
      }
    </>
  )
}
