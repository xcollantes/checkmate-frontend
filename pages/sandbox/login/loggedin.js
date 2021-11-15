import { useEffect } from 'react'
import useRouter from 'next/router'
import Box from '@mui/material/Box'
import useAuth from '../context/AuthUserContext'


const { login, logout } = useAuth()

export default function LoggedIn() {
  return (
    <Box>
      <button onClick={login}>LOG IN</button>
      <button onClick={logout}>LOG OUT</button>
    </Box>
  )
}
