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

export default function SingleCard(props) {
  console.log("singleCard");
  // console.log({...props});

  console.log(props.iconImage);
  return (
    <Card raised>
      <Image src={props.iconImage}
             height="170em"
             className={singleCardStyle.cardIcon}/>
      <CardContent className={singleCardStyle.cardText}>
        <Typography variant="subtitle1"
                    align="center"
                    color="text.primary">

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">More</Button>
      </CardActions>
    </Card>
  )
}
