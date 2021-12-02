import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import utilStyles from '../css/utils.module.css'
import configData from '../config.json'


export default function TopAppBar({ hideLogo, hideLogin, userAccount }) {
  console.log("USER ACCOUNT: ", userAccount)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {hideLogo
            ? <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
            : <Link href="/">
                <Typography variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            className={utilStyles.headerLogoAppBar}>
                  Checkmate
                </Typography>
              </Link>
          }

          {userAccount
            ? <Button style={{ backgroundColor: "transparent" }}
                    color="inherit">
                Logout
              </Button>
            : <Link href="/login">
                <Button style={{ backgroundColor: "transparent" }}
                        color="inherit">
                  Login
                </Button>
              </Link>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}
