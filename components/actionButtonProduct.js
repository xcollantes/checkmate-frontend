import Link from 'next/link'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'


/** Call to action to add alert to purchase.

*/
export default function ProductActionButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Link href="#" passHref>
        <Fab color="secondary"
             variant="extended"
             component="a"
             size="medium">
          Alert me
        </Fab>
      </Link>
    </Box>
  )
}
