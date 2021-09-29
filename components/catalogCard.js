import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'


export default function CatalogCard( product ) {
  return (
    <Card raised>
      <CardContent>
        {product.title}
      </CardContent>
      <CardActions>
        {product.action}
      </CardActions>
    </Card>
  )
}
