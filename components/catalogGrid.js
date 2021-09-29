import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import CatalogCard from '../components/catalogCard'


export default function CatalogGrid( {children} ) {
  // const rowContent = ()

  let resultRow = [];
  for (let row = 0; row <= 100; row++) {
    resultRow.push(
      <Grid item xs={12} sm={6} md={3}>
        <CatalogCard title="hello"
                     action="See more">
        </CatalogCard>
      </Grid>
    );
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {resultRow}{children}
        </Grid>
      </Box>
  )
}
