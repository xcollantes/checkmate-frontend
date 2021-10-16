import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import data from '../../../testdata/products.json'

export default function Template() {
  const router = useRouter()
  const { pid } = router.query
  console.log(router.query)

  return (
    <Box>
      <Typography variant="h1">Template page</Typography>
      <Typography variant="body1">page id: {pid}</Typography>
      <Typography variant="body1">args: {router.query.argone}</Typography>
    </Box>
  )
}
