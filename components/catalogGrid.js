import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import CatalogCard from '../components/catalogCard'


export default function CatalogGrid() {
  const rowContent = (
    <Grid item xs={3}>
      <CatalogCard>
      </CatalogCard>
    </Grid>
  )

  let resultRow = [];
  for (let row = 0; row <= 3; row++) {
    resultRow.push(rowContent);
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {resultRow}
        </Grid>
      </Box>
  )
}
