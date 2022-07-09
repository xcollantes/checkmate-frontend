import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography'
// import SnackbarProductActionButton from '../components/actionButtonProduct'
import ActionNotification from '../components/actionNotification'

import products from '../testdata/products.json'

export async function getStaticProps(context) {
  // No-op since getStaticPaths needs getStaticProps to be called.
  return { props: {} }
}

export async function getStaticPaths() {
  // Paths must be specified here.  User specified paths out of range
  // will be directed to 404 error.
  // https://stackoverflow.com/a/69684432/8278075
  const dynamicFiles = products.map(product => (
    {
      params: { pid: String(product._id) },  // Product IDs are ints in JSON file
    }
  ))

  return {
    paths: dynamicFiles,
    fallback: false
  }
}

export default function Product() {
  const router = useRouter()
  const { pid } = router.query

  const productData = products.filter(product => product._id == pid)[0]  // Choose one result

  let renderCartButton = false
  if (router.query.cart_button) {
    renderCartButton = true
  }p

  return (
    <Box sx={{ mt: "2.5rem" }}>
      <Grid container justifyContent="space-evenly" spacing={3.5}>
        <Grid item xs={12} xs={6}>
          <Box sx={{ position: "relative", height: "20rem" }}>
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
          <Typography variant="h5" textAlign="left">
            {productData.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ActionNotification
            buttonText="Click"
            buttonColor="secondary"
            alertText="Some text for alert"
            alertType="success">
            <AddShoppingCartIcon fontSize="small" sx={{ mr: "0.30rem" }} />
          </ActionNotification>
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
  )
}
