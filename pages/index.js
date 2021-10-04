import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import FloatingActionButtons from '../components/actionButton'
import TripleCard from '../components/tripleCard'
import BaseLayout from '../components/base'
import utilStyles from '../css/utils.module.css'
import configData from '../config.json'

import emailImage from '../public/images/email.svg'


export default function Home() {
  return (
    <BaseLayout home>
      <Box className={utilStyles.container}>
        <h1 className={utilStyles.heading3Xl}>{configData.METADATA.WEBSITE_NAME}</h1>
        <p className={utilStyles.headingLg}>{configData.METADATA.TAGLINE}</p>
        <FloatingActionButtons text="Get notified"></FloatingActionButtons>
      </Box>
      <Box className={utilStyles.container}>
        <TripleCard
          cardOne = {{ icon: {emailImage}, content: "Never lose track when your product is back in stock" }}
          cardTwo = {{ icon: {emailImage}, content: "Avoid spam by never giving your email for notifications again" }}
          cardThree = {{ icon: {emailImage}, content: "Get instant notifications when a product is back in stock" }}>
        </TripleCard>
      </Box>
      <Box sx={{ bgcolor: "yellow" }}>

      <Typography variant="header1"></Typography>
      <TripleCard
        cardOne = {{ icon: {emailImage}, content: "1" }}
        cardTwo = {{ icon: {emailImage}, content: "2" }}
        cardThree = {{ icon: {emailImage}, content: "3" }}>
      </TripleCard>
      </Box>
    </BaseLayout>
  )
}
