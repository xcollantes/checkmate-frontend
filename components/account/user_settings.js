/**
 * Component in user account.
 */

import { useEffect, useRef, useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useAuthContext } from '../../contexts/auth'
import { getUserProfile } from '../../firebase_utils/account_utils'
import config from '../../config.json'


export default function UserSettings() {
  const user = useAuthContext()
  const [profile, setProfile] = useState()

  const saveText = "Save changes"
  const handleSaveClick = () => { }

  useEffect(() => getUserProfile(user.uid).then(p => { setProfile(p) }), [])

  return (
    <>
      <Button variant="contained" color="secondary" sx={{ mb: 2 }}
        onClick={handleSaveClick}>
        {saveText}
      </Button>

      <Typography variant="h6">My info</Typography>

      {user.email}
      Phone number: {user.phoneNumber}
      Secondary {profile && profile.alternate_email}
      Last name: {profile && profile.last_name}
      Birthday: {profile && profile.birthdate}


      profile && profile.sending_preferences.email}
      {profile && profile.sending_preferences.sms}

      <TextField
        id="profile_first_name"
        label="First name"
        defaultValue={profile && profile.first_name} />
      <TextField
        id="profile_first_name"
        label="First name"
        defaultValue={profile && profile.first_name} />
      <TextField
        id="profile_first_name"
        label="First name"
        defaultValue={profile && profile.first_name} />
      <TextField
        id="profile_first_name"
        label="First name"
        defaultValue={profile && profile.first_name} />
      <TextField
        id="profile_first_name"
        label="First name"
        defaultValue={profile && profile.first_name} />

      <Typography variant="h6">My alert preferences</Typography>

      <TextField
        id="profile_first_name"
        label="First name"
        defaultValue={profile && profile.first_name} />
      <TextField
        id="profile_first_name"
        label="First name"
        defaultValue={profile && profile.first_name} />
      <TextField
        id="profile_first_name"
        label="First name"
        defaultValue={profile && profile.first_name} />


      <Button variant="contained" color="secondary" sx={{ mt: 2 }}
        onClick={handleSaveClick}>
        {saveText}
      </Button>
    </>
  )

}