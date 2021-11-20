import { useEffect } from 'react'
import useRouter from 'next/router'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword } from "firebase/auth"
import firebaseAuth from "../../../firebase"

// import { login, loggingWithEmail, logout } from '../../../context/AuthUserContext.js'
// import SomePrint from '../../../context/AuthUserContext.js'


export default function LoggedIn() {
  const auth = getAuth()
  const loggingWithEmail = () => {
    // const email = document.getElementById("user").value
    // const password = document.getElementById("pass").value

   signInWithEmailAndPassword(
      auth, "collantes.xavier@gmail.com", "Password123").then(cred => {
      // const token = cred.accessToken
      const user = cred.user
      console.log("GOOGEL AUTH PROVIDER")
      console.log({cred, user})
    }).catch(e => {
      const errorMessage = "Error with login" + e.code + " " + e.message + " with email " + e.email
      console.error(errorMessage)
    })
  }

  // const logout = () => {
  //   signOut(firebaseAuth)
  //   console.log("LOGOUT SUCCESSFUL")
  // }

  return (
    <Box>
      <button onClick={loggingWithEmail}>LOG IN</button>
    </Box>
  )
}
