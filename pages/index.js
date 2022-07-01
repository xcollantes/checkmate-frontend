import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import TripleCard from '../components/tripleCard'
import utilStyles from '../css/utils.module.css'
import configData from '../config.json'
import bigOneImage from '../public/images/1.png'
import notifyImage from '../public/images/notification.png'
import boxPackageImage from '../public/images/package.png'
import emailImage from '../public/images/email.svg'
import { UserContext, useUserContext } from '../contexts/user'

export async function getStaticProps(context) {
  return {
    props: { hideLogo: true }
  }
}

export default function Home() {
  return (
    <>
      <UserContext.Consumer>
        {({ profileData }) => { return (<p>{profileData}</p>) }}
      </UserContext.Consumer>
      <Box className={utilStyles.container}>
        <h1 className={utilStyles.headerLogo}>{configData.METADATA.WEBSITE_NAME}</h1>
        <p className={utilStyles.headingLg}>{configData.METADATA.TAGLINE}</p>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Link href="/catalog">
            <Fab variant="extended"
              color="primary"
              component="a"
              size="large">
              See catalog
            </Fab>
          </Link>
        </Box>
      </Box>
      <Box className={utilStyles.container}>
        <TripleCard
          cardOneIcon={notifyImage}
          cardOneContent="Many stores, one notification."
          cardTwoIcon={emailImage}
          cardTwoContent="Avoid spam by never giving your email for notifications again"
          cardThreeIcon={boxPackageImage}
          cardThreeContent="Get instant notifications when a product is back in stock">
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
    </>
  )
}
