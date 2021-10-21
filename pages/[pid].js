import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Showcase from '../components/showcase'
import ProductActionButton from '../components/actionButtonProduct'
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
        <Box sx={{ mt: "2.5rem" }}>
          <Grid container justifyContent="space-evenly" spacing={3}>
            <Grid item xs={12} xs={6}>
              <Box sx={{ position: "relative", height: "20rem"}}>
                <Image src={"/../public/images/products/" + productData.image}
                       layout="fill"
                       objectFit="contain" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                TODO: Some number of sites and list of sites available
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" textAlign="left">{productData.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <ProductActionButton productLink={productData.name} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                TYLER has one arm around Jack's shoulder; the other hand
                holds a HANDGUN with the barrel lodged in JACK'S MOUTH.
                Tyler is sitting in Jack's lap. They are both
                sweating and disheveled, both around 30; Tyler
                is blond, handsome; and Jack, brunette, is appealing in a
                dry sort of way.  Tyler looks at his watch.</Typography>
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
