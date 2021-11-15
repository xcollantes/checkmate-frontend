import { createContext, useContext, Context } from 'react'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword } from "firebase/auth"
import firebaseAuth from "../firebase"

class AuthUser {
  const loggingWithEmail = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password).then(cred => {
      const token = cred.accessToken
      const user = cred.user
      console.log("GOOGEL AUTH PROVIDER")
      console.log({cred, token, user})
    }).catch(e => {
      const errorMessage = "Error with Google Authentication " + e.code + " " + e.message + " with email " + e.email + " " + GoogleAuthProvider.credentialFromError(e)
      console.error(errorMessage)
    })
  }

  // export const login = () => {
  //   signInWithPopup(firebaseAuth, provider).then(result => {
  //     const cred = GoogleAuthProvider.credentialFromResult(result)
  //     const token = cred.accessToken
  //     const user = result.user
  //     console.log("GOOGEL AUTH PROVIDER")
  //     console.log({cred, token, user})
  //   }).catch(e => {
  //     const errorMessage = "Error with Google Authentication " + e.code + " " + e.message + " with email " + e.email + " " + GoogleAuthProvider.credentialFromError(e)
  //     console.error(errorMessage)
  //   })
  // }

  const logout = () => {
    firebaseAuth.signOut()
    console.log("LOGOUT SUCCESSFUL")
  }
}
