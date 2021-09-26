import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import singleCardStyle from '../css/singleCard.module.css'

export default function SingleCard({ text }) {
  return (
    <Card raised>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {text.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}
