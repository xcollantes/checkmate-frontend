import Link from 'next/link'
import { useRouter } from 'next/router'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { signOut } from 'firebase/auth'
import { useAuthContext } from '../contexts/auth'
import utilStyles from '../css/utils.module.css'
import { firebaseAuth } from '../firebaseApp'
import configData from '../config.json'

export default function TopAppBar({ hideLogo, hideLogin, showLogout }) {
  const user = useAuthContext()
  const router = useRouter()
  function signOutUser() {
    signOut(firebaseAuth)
    router.push("/login?comebacksoon=:D")
  }
  const logoPlaceholder = <Typography variant="h6"
    component="div" sx={{ flexGrow: 1 }}>
  </Typography>

  const logoFeature = <Link href="/">
    <Typography variant="h6"
      component="div"
      sx={{ flexGrow: 1 }}
      className={utilStyles.headerLogoAppBar}>
      {configData.METADATA.WEBSITE_NAME}
    </Typography>
  </Link>

  const loginFeature = <Link href="/login">
    <Button style={{ backgroundColor: "transparent" }}
      color="inherit">
      Login
    </Button>
  </Link>

  const logoutFeature = <Button style={{ backgroundColor: "transparent" }}
    color="inherit"
    onClick={() => signOutUser()}>
    Logout {user && user.displayName}
  </Button>

  const accountNameFeature = <Button color="inherit"
    onClick={() => router.push("/account")}>
    My account
  </Button>

  console.log("SHOWLOGOUT: ", showLogout)
  console.log("HIDELOG: ", hideLogin)
  const topRightBar = () => {
    if (user) {
      if (showLogout) {
        return logoutFeature
      } else {
        return accountNameFeature
      }
    }
    else if (hideLogin) {
      return <></>
    }
    else {
      return loginFeature
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {hideLogo ? logoPlaceholder : logoFeature}
        {topRightBar()}
      </Toolbar>
    </AppBar>

  )
}
