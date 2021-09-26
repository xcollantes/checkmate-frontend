import Head from 'next/head'
import Link from 'next/link'
import FloatingActionButtons from '../components/actionButton'
import TripleCard from '../components/tripleCard'
import BaseLayout from '../components/base'
import utilStyles from '../css/utils.module.css'
import baseStyles from '../css/base.module.css'
import configData from '../config.json'


export default function Home() {
  const name = "Xavier"
  return (
    <BaseLayout home>
      <div className={baseStyles.container}>
        <h1 className={utilStyles.heading3Xl}>{configData.METADATA.WEBSITE_NAME}</h1>
        <p className={utilStyles.headingLg}>{configData.METADATA.TAGLINE}</p>
        <FloatingActionButtons text="Get notified"></FloatingActionButtons>
      </div>

      <TripleCard
        cardOne = {{ title: "Card number one", content: "content" }}
        cardTwo = {{ title: "card nubmer two", content: "contenttwo" }}
        cardThree = {{ title: "XXX", content: "hello" }}>
      </TripleCard>


    </BaseLayout>
  )
}
