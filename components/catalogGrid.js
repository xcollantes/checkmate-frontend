import * as React from 'react'
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CatalogCard from '../components/catalogCard'


export default function CatalogGrid( props ) {
  // const rowContent = ()

  console.log({xxx});


  const router = useRouter();
  if (router.isFallback) {
    return (
      <Box>This is the fallback.</Box>
    )
  }

  return (

  )
}
