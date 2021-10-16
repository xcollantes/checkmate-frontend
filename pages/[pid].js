import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SearchBar from '../components/searchBar'
import BaseLayout from '../components/base'

import products from '../testdata/products.json'


export default function Product() {
  const router = useRouter()
  const { pid } = router.query

  return (
    <BaseLayout>
      <Box>
      <Grid container justifyContent="space-evenly">

        {/* Menu selector */}
        <Grid item xs={12} md={3} sx={{ pb: "2.5rem", bgcolor: "yellow" }}>

        </Grid>

        <Grid item xs={12} md={9}>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>

            </Grid>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </BaseLayout>
  )
}
