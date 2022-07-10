import { useState } from "react"
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
  Typography
} from "@mui/material"
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import theme from '../../themes/theme'
import { addSub, getSubs } from "../../firebase_utils/subscriptions_utils"

export default function Subscriptions({ userId }) {
  const [userSubs, setUserSubs] = useState([
    { id: "xbox_series_x", name: "Xbox Series X" },
    { id: "sig_saur_mpx", name: "Sig Saur MPX" },
    { id: "radio", name: "Radio" }
  ])
  const [open, setOpen] = useState(false)

  const handleClickRemove = (subCancel) => {
    removeSub(subCancel)
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const removeSub = (subCancel) => {
    setUserSubs(prevProducts => prevProducts.filter(p => p.id != subCancel.id))
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
  addSub("NEWSUB", userId)
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
        {emptySubs(userSubs.length)}
        {
          userSubs.map(value => {
            const label = `checkbox-list-secondary-label-${value.id}`
            return (
              <>
                <ListItem
                  key={value.id}
                  disablePadding
                  secondaryAction={
                    <Tooltip title={`Unsubscribe ${value.name}`}>
                      <IconButton
                        color="error"
                        onClick={() => { handleClickRemove(value) }}>
                        <HighlightOffRoundedIcon />
                      </IconButton>
                    </Tooltip>
                  }>

                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${value.id}`}
                        src='/../public/images/lol.jpeg' />
                    </ListItemAvatar>
                    <ListItemText
                      id={label.id}
                      primary={`${value.name}`} />
                  </ListItemButton>

                </ListItem>
              </>
            )
          })
        }
      </List>
    </>
  )
}