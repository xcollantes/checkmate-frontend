import Box from '@mui/material/Box'
import '@fontsource/carter-one'
import Typography from '@mui/material/Typography'
import utilStyles from '../css/utils.module.css'
import { useUserContext } from '../contexts/user'

export async function getStaticProps() {
  return {
    props: { protected: true }
  }
}

export default function UserAccount(pageProps) {
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
