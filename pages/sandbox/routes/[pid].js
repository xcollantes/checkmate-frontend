import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import data from '../../../testdata/products.json'


export async function getStaticPaths() {
  // const dynamicFileNames = data.map(productInfo => productInfo._id)
  console.log("FILENAMES")
  console.log(data)
  const filenames = data.map(p => (
    {
      params: { pid: String(p._id) },  // Product IDs are ints in JSON file 
    }
  ))
  console.log(filenames)

  return {
    paths: filenames,
    fallback: false
  }
}

export async function getStaticProps(context) {
  // No-op since getStaticPaths needs getStaticProps to be called.
  return {
    props: {}
  }
}

export default function Template(props) {
  const router = useRouter()
  const { pid } = router.query
  console.log("TEMPLATE PROPS")
  console.log(props)

  console.log(pid)
  console.log(router.query)

  const p = data.filter(product => product._id == pid)[0]  // Choose one result
  console.log(p)
  console.log(p.image)

  const imageRender = <Image src={"/../public/images/products/" + p.image}
         layout="fill"
         objectFit="contain" />

  console.log("PROPS in TEMPLATE")
  console.log(props)
  console.log(data)
  return (
    <Box>
      <Typography variant="h1">Template page</Typography>
      <Typography variant="body1">page id: {pid}</Typography>
      <Typography variant="body1">args: {router.query.argone}</Typography>
      <Box sx={{ position: "relative", height: "20rem"}}>
      {imageRender}

      </Box>
    </Box>
  )
}
