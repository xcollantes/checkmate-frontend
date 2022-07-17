import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Fab, Snackbar, Alert } from '@mui/material'

ActionNotification.propTypes = {
  buttonText: PropTypes.string,
  buttonColor: PropTypes.any,
  buttonVariant: PropTypes.string,
  alertText: PropTypes.string,
  alertType: PropTypes.string,
  alertVariant: PropTypes.string,
  alertDuration: PropTypes.number
}

/* Button when clicked will trigger a notification on screen. */
export default function ActionNotification(
  {
    children,
    buttonText,
    buttonColor,
    buttonVariant = "extended",
    alertText,
    alertType = "success",
    alertVariant = "filled",
    alertDuration = 5000
  }) {

  useEffect(() => {
    console.log("ALEWRTEXT: ", alertText)
  })

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
      {/* Button */}
      <Fab
        color={buttonColor}
        variant={buttonVariant}
        onClick={handleClick}
        sx={{ mx: "0" }}
        component="a"
        size="medium">
        {children}{buttonText}
      </Fab>
      {/* Notification */}
      <Snackbar
        open={open}
        autoHideDuration={alertDuration}
        onClose={handleClose}>
        <Alert  // If `action=` not specified, an "X" will appear 
          sx={{ width: "100%" }}
          severity={alertType}
          onClose={handleClose}
          variant={alertVariant}>
          {alertText}
        </Alert>
      </Snackbar>
    </Box >
  )
}