/**
 * Component in user account.
 */

import { useEffect, useRef, useState } from 'react'
import { Button, Typography } from '@mui/material'
import { useAuthContext } from '../../contexts/auth'
import { getUserProfile } from '../../firebase_utils/account_utils'

export default function UserSettings() {
  const user = useAuthContext()
  const [profile, setProfile] = useState()

  const saveText = "Save changes"
  const handleSaveClick = () => { }
  console.log("PROFILE: ", profile)

  useEffect(() => getUserProfile(user.uid).then(p => { setProfile(p) }), [])

  return (
    <>
      <Button variant="contained" color="secondary" sx={{ mb: 2 }}
        onClick={handleSaveClick}>
        {saveText}
      </Button>

      <Typography variant="h6">My info</Typography>

      <Typography variant="body1">Email: {user.email}</Typography>
      <Typography variant="body1">Phone number: {user.phoneNumber}</Typography>
      <Typography variant="body1">Secondary email: {profile && profile.alternate_email}</Typography>
      <Typography variant="body1">First name: {profile && profile.first_name}</Typography>
      <Typography variant="body1">Last name: {profile && profile.last_name}</Typography>
      <Typography variant="body1">Birthday: {profile && profile.birthdate}</Typography>

      <Typography variant="h6">My alert preferences</Typography>
      <Typography variant="body1">Email: {profile && profile.sending_preferences.email}</Typography>
      <Typography variant="body1">Email: {profile && profile.sending_preferences.sms}</Typography>

      <Button variant="contained" color="secondary" sx={{ mt: 2 }}
        onClick={handleSaveClick}>
        {saveText}
      </Button>
    </>
  )

}