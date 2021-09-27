import * as React from 'react';
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import singleCardStyle from '../css/singleCard.module.css'

import emailImage from '../public/images/email.svg'

export default function SingleCard(cardData) {
  return (
    <Card raised>
      <Image src={emailImage}
             height="170em"
             className={singleCardStyle.cardIcon}/>
      <CardContent className={singleCardStyle.cardText}>
        <Typography variant="subtitle1"
                    align="center"
                    color="text.primary">
          {cardData.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">More</Button>
      </CardActions>
    </Card>
  )
}
