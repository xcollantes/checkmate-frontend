import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { app } from '../../../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


export default function SignUp() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const auth = getAuth()

  function handleUsernameChange(event) {
    setUsername(event.target.value)
    console.log("USERNAME CHANGE")
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
    console.log("PASSWORD FIELD ")
  }

  function newUserWithEmail(auth, email, password) {
    console.log("NEW ")
    createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
      const user = userCredential.user
      console.log("USER: " + user)

    }).catch(error => {
      console.log("ERROR: " + code.code + " " + error.message)

    })
  }

  function handleFormSubmit(event) {
    console.log("AHNDLESUBMIT")
    newUserWithEmail(auth, username, password)
  }

  return (
    <Box sx={{ width: "300px" }} component="form">
      <FormControl>
        This is a form
        <TextField id="user" onChange={handleUsernameChange} variant="outlined" required />
        <TextField id="pass"
                   onChange={handlePasswordChange}
                   variant="outlined"
                   required />

        <Button onClick={handleFormSubmit} type="submit">New user</Button>

      </FormControl>
      <Box>
        <Typography variant="h1">{username}</Typography>
       </Box>
      <Box>
       <Typography variant="h1">{password}</Typography>
      </Box>

      <Box>
       <Typography variant="h1">{auth.user}</Typography>
      </Box>
    </Box>
  )


}
