import * as React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import singleCardStyle from '../css/singleCard.module.css'

import emailImage from '../public/images/email.svg'

export default function SingleCard(props) {
  return (
    <Card raised>
      <Box sx={{ pt: "20px" }}>
        <Image src={props.iconImage}
          height="120em"
          width="120em"
          className={singleCardStyle.cardIcon} />
      </Box>
      <CardContent className={singleCardStyle.cardText}>
        <Typography variant="subtitle1"
          textAlign="center"
          color="text.primary">
          {props.cardContent}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">More</Button>
      </CardActions>
    </Card>
  )
}
