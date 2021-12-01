import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import utilStyles from '../css/utils.module.css'
import configData from '../config.json'


export default function TopAppBar({ hideLogo, hideLogin }) {

  console.log("HIDELOGIN: ", hideLogin)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          {!hideLogo && (
            <Link href="/">
                <Typography variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            className={utilStyles.headerLogoAppBar}>
                  Checkmate
                </Typography>
            </Link>)
          }
          {hideLogo && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>)
          }

          {!hideLogin && <Button color="inherit"><Link href="/login"><a>Login</a></Link></Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
