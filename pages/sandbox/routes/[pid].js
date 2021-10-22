import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import data from '../../../testdata/products.json'

export default function Template() {
  const router = useRouter()
  const { pid } = router.query
  console.log(pid)
  console.log(router.query)
  let x = ""
  const m = 2

  if (pid == m) {
    x = <Typography>{pid} is equal to {m}</Typography>
  }

  const p = data.filter(product => product._id == pid)[0]  // Choose one result
  console.log(p)

  return (
    <Box>
      <Typography variant="h1">Template page</Typography>
      <Typography variant="body1">page id: {pid}</Typography>
      <Typography variant="body1">args: {router.query.argone}</Typography>
      <Box sx={{ position: "relative", height: "20rem"}}>
        <Image src={"/../public/images/products/" + p.image}
               layout="fill"
               objectFit="contain" />
      </Box>
    </Box>
  )
}
