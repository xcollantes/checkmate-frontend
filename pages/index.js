import Head from 'next/head'
import Link from 'next/link'
import Box from '@mui/material/Box';
import FloatingActionButtons from '../components/actionButton'
import TripleCard from '../components/tripleCard'
import BaseLayout from '../components/base'
import utilStyles from '../css/utils.module.css'
import baseStyles from '../css/base.module.css'
import configData from '../config.json'

import emailImage from '../public/images/email.svg'


export default function Home() {
  const name = "Xavier"
  const iconArray = [{emailImage}, {emailImage}];

  return (
    <BaseLayout home>
      <Box className={baseStyles.container}>
        <h1 className={utilStyles.heading3Xl}>{configData.METADATA.WEBSITE_NAME}</h1>
        <p className={utilStyles.headingLg}>{configData.METADATA.TAGLINE}</p>
        <FloatingActionButtons text="Get notified"></FloatingActionButtons>
      </Box>
      <Box className={baseStyles.container}>
        <TripleCard
          cardOne = {{ icon: {emailImage}, content: "Never lose track when your product is back in stock" }}
          cardTwo = {{ icon: {emailImage}, content: "Avoid spam by never giving your email for notifications again" }}
          cardThree = {{ icon: {emailImage}, content: "Get instant notifications when a product is back in stock" }}>
        </TripleCard>
      </Box>

      <div>Icons made by
           <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">
           www.flaticon.com</a>
      </div>
    </BaseLayout>
  )
}
