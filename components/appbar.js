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


export default function TopAppBar({ isHome }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          {!isHome && (
            <Link href="/">
                <Typography variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            className={utilStyles.headerLogoAppBar}>
                  Checkmate
                </Typography>
            </Link>)
          }
          {isHome && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>)
          }

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
