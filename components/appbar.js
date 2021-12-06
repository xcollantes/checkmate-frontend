import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { signOut } from 'firebase/auth'
import utilStyles from '../css/utils.module.css'
import { firebaseAuth } from '../firebaseApp'
import configData from '../config.json'


export default function TopAppBar({ hideLogo, hideLogin, userAccount }) {
  const logoPlaceholder = <Typography variant="h6"
                                      component="div" sx={{ flexGrow: 1 }}>
                          </Typography>

  const logoFeature = <Link href="/">
                        <Typography variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            className={utilStyles.headerLogoAppBar}>
                          Checkmate
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
                            onClick={() => signOut(firebaseAuth)}>
                          Logout
                        </Button>

  const topRightBar = () => {
    if (userAccount) {
      return logoutFeature
    }
    else if (hideLogin) {
      return <></>
    }
    else {
      return loginFeature
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {hideLogo ? logoPlaceholder : logoFeature}
          {topRightBar()}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
