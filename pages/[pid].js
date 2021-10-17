import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Showcase from '../components/showcase'
import FloatingActionButtons from '../components/actionButton'
import SearchBar from '../components/searchBar'
import BaseLayout from '../components/base'

import products from '../testdata/products.json'


export default function Product() {
  const router = useRouter()
  const { pid } = router.query

  console.log(router.query)

  const productData = products.filter(product => product._id == pid)[0]  // Choose one result
  console.log(productData)

  let mockVersion = false
  if (router.query.mock_version) {
    mockVersion = true
  }

  function buildLefthand() {
    return (
      <Box>
      </Box>

    )
  }

  function buildRighthand() {
    return (
      <Box>
      </Box>

    )
  }

  return (
    <BaseLayout>

      {mockVersion &&
        <Box sx={{ mt: "1rem" }}>
          <Grid container justifyContent="space-evenly">
            <Grid item xs={12}>
              <Image src={"/../public/images/products/" + productData.image}
                     height="100px"
                     width="100px"/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4">{productData.name}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">TODO: Details of the product here</Typography>
            </Grid>
          </Grid>
        </Box>
      }

      {!mockVersion &&
        <>
        <Box>
          <Typography variant="h2">{pid}</Typography>
        </Box>
        <Box>
          <Showcase lefthand={buildLefthand()}></Showcase>
        </Box>
        </>
      }

    </BaseLayout>
  )
}
