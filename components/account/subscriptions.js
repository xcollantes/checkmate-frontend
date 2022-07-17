import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Alert,
  Avatar,
  Button,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material"
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import theme from '../../themes/theme'
import { addSub, deleteSub, getSubs } from "../../firebase_utils/subscription_utils"

export default function Subscriptions({ userId }) {
  const [userSubIds, setUserSubIds] = useState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    getSubs(userId).then(p => setUserSubIds(p))
  }, [])

  const handleClickRemove = (subId) => {
    removeSub(subId)
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const removeSub = (subCancelId) => {
    deleteSub(userId, subCancelId, userSubIds)
    setUserSubIds(prevProducts => prevProducts.filter(p => p != subCancelId))
  }

  const emptySubs = (stateLength) => {
    if (stateLength == 0) {
      return (
        <>
          <Typography
            align="center"
            color={theme.palette.grey[400]}
            sx={{ mt: 5 }}>No checkmates yet</Typography>
          <Box textAlign="center" sx={{ mt: 1 }}>
            <Link href="/catalog">
              <Button variant="contained" color="secondary"
                size="small">Add</Button>
            </Link>
          </Box>
        </>
      )
    }
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}>
        <Alert
          sx={{ width: "100%" }}
          severity="success"
          onClose={handleClose}
          variant="filled">
          Removed one checkmate subscription
        </Alert>
      </Snackbar>
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {userSubIds && emptySubs(userSubIds.length)}
        {
          userSubIds?.map(subId => {
            const label = `checkbox-list-secondary-label-${subId}`
            return (
              <>
                <ListItem
                  key={subId}
                  disablePadding
                  secondaryAction={
                    <Tooltip title={`Unsubscribe ${subId}`}>
                      <IconButton
                        color="error"
                        onClick={() => { handleClickRemove(subId) }}>
                        <HighlightOffRoundedIcon />
                      </IconButton>
                    </Tooltip>
                  }>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${subId}`}
                        src='/../public/images/lol.jpeg' />
                    </ListItemAvatar>
                    <ListItemText
                      id={label}
                      primary={`${subId}`} />
                  </ListItemButton>
                </ListItem>
              </>
            )
          })
        }
      </List>
      <Button onClick={() => addSub(Date.now(), userId)} variant="outlined">ADD SOME PRODUCT</Button>
    </>
  )
}