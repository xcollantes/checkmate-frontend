import { useState } from 'react'
import Link from 'next/link'
import Snackbar from '@mui/material/Snackbar'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'


/** Call to action to add alert to purchase. */
export default function ProductActionButton( {productLink} ) {
  const [alertOpen, setAlertOpen] = useState(false)

  const productName = productLink
  function handleAlertSuccess() {
    return (
      <>
      <Button
        color="secondary"
        size="small"
        onClick={handleCloseAlert()}>
        UNDO
      </Button>

     <IconButton
       color="inherit"
       size="small">
       <CloseIcon fontSize="small"/>
     </IconButton>
     </>
    )
  }

  const handleClick = (
    setAlertOpen(true)
  )

  function handleCloseAlert() {
    if (reason == "clickaway") {
        return
    }
    setAlertOpen(false)
  }

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Link href={productLink} passHref>
        <Fab color="secondary"
             variant="extended"
             component="a"
             size="medium"
             onClick={handleClick()}>
          Alert me
        </Fab>
      </Link>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        open={alertOpen}
        message="{productName} added to your alert list!"
        onClose={handleCloseAlert()}
        action={handleAlertSuccess()}/>
    </Box>
  )
}
