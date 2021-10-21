import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import Alert from '@mui/material/Alert'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'
import SnackbarPop from '../components/alerts'


/** Call to action to add alert to purchase. */
export default function ProductActionButton( {productLink} ) {
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
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab
        color="secondary"
        variant="extended"
        onClick={handleClick}
        component="a"
        size="medium">
        Alert me
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
