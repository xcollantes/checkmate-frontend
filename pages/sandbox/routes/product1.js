import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Product1() {
  return (
    <Box>
      <Typography variant="h3">Product one</Typography>
      <Typography variant="body1">page id: {pid}</Typography>
    </Box>
  )
}

export default  Product1
