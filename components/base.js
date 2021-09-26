import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TopAppBar from './appbar.js'
import baseStyles from '../css/base.module.css'
import utilStyles from '../css/utils.module.css'
import configData from '../config.json'

const name = 'Xavier'

// Component meant to be included on all pages in Checkmate frontend.
export default function BaseLayout({ children, home }) {
  return (
      <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="{configData.METADATA.WEBSITE_DESCRIPTION}"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            configData.METADATA.WEBSITE_NAME
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="keywords" content={configData.METADATA.WEBSITE_TAGS} />
        <meta name="og:title" content={configData.METADATA.WEBSITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <title>{configData.METADATA.WEBSITE_NAME}</title>
      </Head>

      <TopAppBar></TopAppBar>

      <div className={baseStyles.pageContent}>
      {children}
      {!home && (
        <div className={baseStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      </div>
      </>
  )
}
