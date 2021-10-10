import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


export default function CatalogCard( product ) {
  let formattedPrice = "$" + product.body.toLocaleString(
    "en-US", {minimumFractionDigits: 2})  // TODO: Localize

  return (
    <Card raised>
      <CardContent>
        <Typography>{product.title}</Typography>
        <Typography varient="subheader1">{formattedPrice}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Buy</Button>
      </CardActions>
    </Card>
  )
}
