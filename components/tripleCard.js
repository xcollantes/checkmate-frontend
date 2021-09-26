import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import tripleCardStyle from '../css/tripleCard.module.css'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: "16em",
  color: theme.palette.text.secondary,
}));

export default function TripleCard({
  cardOne = {
    title,
    content
  },
  cardTwo ={
    title,
    content
  },
  cardThree = {
    title,
    content
  }}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Item>
            {cardOne.title}
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            {cardTwo.title}
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            {cardThree.title}
          </Item>
        </Grid>

      </Grid>

    </Box>
  );
}
