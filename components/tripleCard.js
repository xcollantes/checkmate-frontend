import * as React from 'react';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import tripleCardStyle from '../css/tripleCard.module.css'
import SingleCard from '../components/singleCard'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: "16em",
  color: theme.palette.text.secondary,
}));

export default function TripleCard({
    cardOneIcon,
    cardOneContent,
    cardTwoIcon,
    cardTwoContent,
    cardThreeIcon,
    cardThreeContent
  }) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, md: 5 }}>
        <Grid item xs={12} md={4}>
          <SingleCard iconImage={cardOneIcon}
                      cardContent={cardOneContent}></SingleCard>

        </Grid>
        <Grid item xs={12} md={4}>
          <SingleCard iconImage={cardTwoIcon}
                      cardContent={cardTwoContent}></SingleCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <SingleCard iconImage={cardThreeIcon}
                      cardContent={cardThreeContent}></SingleCard>
        </Grid>

      </Grid>

    </Box>
  );
}
