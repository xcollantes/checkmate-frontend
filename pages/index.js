import Image from 'next/image'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import FloatingActionButtons from '../components/actionButton'
import TripleCard from '../components/tripleCard'
import BaseLayout from '../components/base'
import utilStyles from '../css/utils.module.css'
import configData from '../config.json'

import bigOneImage from '../public/images/1.png'
import smartphoneImage from '../public/images/smartphone.png'
import boxPackageImage from '../public/images/package.png'
import emailImage from '../public/images/email.svg'



export default function Home() {
  return (
    <BaseLayout home>
      <Box className={utilStyles.container}>
        <h1 className={utilStyles.headerLogo}>{configData.METADATA.WEBSITE_NAME}</h1>
        <p className={utilStyles.headingLg}>{configData.METADATA.TAGLINE}</p>
        <FloatingActionButtons text="Get notified"></FloatingActionButtons>
      </Box>
      <Box className={utilStyles.container}>
        <TripleCard
          cardOneIcon = {smartphoneImage}
          cardOneContent = "Never lose track when your product is back in stock"
          cardTwoIcon = {emailImage}
          cardTwoContent = "Avoid spam by never giving your email for notifications again"
          cardThreeIcon = {boxPackageImage}
          cardThreeContent = "Get instant notifications when a product is back in stock">
        </TripleCard>
      </Box>

      <Box className={utilStyles.container}>
        <Image src={bigOneImage}
               width="512px"
               height="512px" />
      </Box>

      <Box className={utilStyles.container}>
        <h2 className={utilStyles.subheaderLogo}>
        A single back-in-stock notification for your favorite stores
        </h2>
      </Box>
    </BaseLayout>
  )
}
