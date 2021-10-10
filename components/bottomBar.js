import Image from 'next/image'
import Link from 'next/link'
import { styled, useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'


export default function BottomBar() {
  const theme = useTheme()

  return (
    <Box sx={{ postition: "static",
               pt: "5rem",
               pb: "10rem",
               mt: "5rem",
               bgcolor: "#001e3c" }}>
      <Container>
        <Grid container >
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <Link href="/">
                  <a><ListItemText primary="Home" /></a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <a><ListItemText primary="How it works" /></a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/catalog">
                  <a><ListItemText primary="Catalog" /></a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <a><ListItemText primary="Contact us" /></a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <a><ListItemText primary="Suggest a product" /></a>
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}
