import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import data from '../../../testdata/products.json'

function HomeIndex() {


  const router = useRouter()
  const { pid } = router.query
  console.log(router.query)
  return (
    <Box>
      <Typography variant="h1">Home Index page</Typography>
      <Typography variant="body1">page id: {pid}</Typography>
    </Box>
  )
}

function Page() {
  const route = useRouter()
  const { pid } = route.query

  return (
    <Box>
      <Typography variant="p">{pid}</Typography>
    </Box>
  )
}

export default HomeIndex
