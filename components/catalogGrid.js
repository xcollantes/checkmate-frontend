import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import CatalogCard from '../components/catalogCard'


export default function CatalogGrid( {children} ) {
  const rowContent = (
    <Grid item xs={12} md={3}>
      <CatalogCard title="hello"
                   action="See more">
      </CatalogCard>
    </Grid>
  )

  let resultSet = [];
  for (let set = 0; set <= 3; set++) {
    let resultRow = [];
    for (let row = 0; row <= 3; row++) {
      resultRow.push(rowContent);
    }
    resultSet.push(resultRow);
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {resultSet}{children}
        </Grid>
      </Box>
  )
}
