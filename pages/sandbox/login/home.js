import useRouter from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseApp, firebaseAuth } from '../../../firebaseApp'


export default function Home() {
  const [user, loading, error] = useAuthState(firebaseAuth)
  console.debug("user: ", user, " laoding: ", loading, " error: ", error)
  return (
    <Box>
      <Typography variant="h1">Some fucking app</Typography>
      <Typography variant="h2">
        {user ?
          <div>{user.displayName}</div>
          : <div>hello</div>
        }</Typography>
    </Box>
  )
}
