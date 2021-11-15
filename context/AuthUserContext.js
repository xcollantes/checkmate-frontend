import { createContext, useContext, Context } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import firebaseAuth from "../firebase"


const provider = new GoogleAuthProvider()

const login = () => {
  signInWithPopup(firebaseAuth, provider).then(result => {
    const cred = GoogleAuthProvider.credentialFromResult(result)
    const token = cred.accessToken
    const user = result.user
    console.log("GOOGEL AUTH PROVIDER")
    console.log({cred, token, user})
  }).catch(e => {
    const errorMessage = "Error with Google Authentication " + e.code + " " + e.message + " with email " + e.email + " " + GoogleAuthProvider.credentialFromError(e)
    console.error(errorMessage)
  })
}

const logout = () => {
  firebaseAuth.signOut()
  console.log("LOGOUT SUCCESSFUL")
}
