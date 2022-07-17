import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import data from '../../../testdata/products.json'


export async function getStaticPaths() {
  const filenames = data.map(p => (
    {
      params: { pid: String(p._id) },  // Product IDs are ints in JSON file 
    }
  ))

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
  const p = data.filter(product => product._id == pid)[0]  // Choose one result
  const imageRender = <Image src={"/../public/images/products/" + p.image}
    layout="fill"
    objectFit="contain" />

  return (
    <Box>
      <Typography variant="h1">Template page</Typography>
      <Typography variant="body1">page id: {pid}</Typography>
      <Typography variant="body1">args: {router.query.argone}</Typography>
      <Box sx={{ position: "relative", height: "20rem" }}>
        {imageRender}
      </Box>
    </Box>
  )
}
