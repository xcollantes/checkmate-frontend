import * as React from 'react'
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CatalogCard from '../components/catalogCard'
import BaseLayout from '../components/base'


// getStaticProps will never send data on the client.
// Must be called from under pages/ 
export async function getStaticProps() {
  const url = "https://api.weatherapi.com/v1/current.json?q=Seattle&key=2d796238cb9b4f0f93700711213009";
  const response = await fetch(url);
  const xxx = await response.json();

  return {
    props: {
      xxx
    }
  }
}

export default function Catalog( props ) {
  console.log({props});
  let resultRow = [];
  for (let row = 0; row <= 100; row++) {
    resultRow.push(
      <Grid item xs={12} sm={6} md={3}>
        <CatalogCard title={props.xxx.location.name}
                     action="See more">
        </CatalogCard>
      </Grid>
    );
  }

  return (
    <BaseLayout catalog>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {resultRow}
        </Grid>
      </Box>
    </BaseLayout>
  )
}
