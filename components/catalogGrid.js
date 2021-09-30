import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import CatalogCard from '../components/catalogCard'

/*
getStaticProps will never send data on the client.
*/
export async function getStaticProps() {
  let url = "https://api.weatherapi.com/v1/current.json?q=Seattle&key=2d796238cb9b4f0f93700711213009";
  const response = await fetch(url);
  const xxx = await response.json();

  return {
    props: {
      xxx
    }
  }
}

function CatalogGrid( {xxx} ) {
  // const rowContent = ()

  let resultRow = [];
  for (let row = 0; row <= 100; row++) {
    resultRow.push(
      <Grid item xs={12} sm={6} md={3}>
        <CatalogCard title={xxx}
                     action="See more">
        </CatalogCard>
      </Grid>
    );
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {resultRow}
        </Grid>
      </Box>
  )
}

export default CatalogGrid
