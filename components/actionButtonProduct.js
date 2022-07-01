import { useState } from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useTheme } from '@mui/material/styles'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

/** Call to action to add alert to purchase. */
export default function ProductActionButton() {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <Box sx={{ '& > :not(style)': { m: 0 } }}>
      <Fab
        color="secondary"
        variant="extended"
        onClick={handleClick}
        sx={{ mx: "0" }}
        component="a"
        size="medium">
        <AddShoppingCartIcon fontSize="small" sx={{ mr: "0.30rem" }} />Add
      </Fab>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}>
        <Alert
          sx={{ width: "100%" }}
          severity="success"
          onClose={handleClose}
          variant="filled">
          Added to your alerts!
        </Alert>
      </Snackbar>
    </Box>
  )
}
