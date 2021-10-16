import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Showcase from '../components/showcase'
import SearchBar from '../components/searchBar'
import BaseLayout from '../components/base'

import products from '../testdata/products.json'


export default function Product() {
  const router = useRouter()
  const { pid } = router.query

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

      <Box>
        <Typography variant="h2">{pid}</Typography>
      </Box>
      <Box>
        <Showcase lefthand={buildLefthand()}></Showcase>
      </Box>
    </BaseLayout>
  )
}
