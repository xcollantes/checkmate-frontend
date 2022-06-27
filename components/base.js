// import Head from 'next/head'
// import Link from 'next/link'
// import Container from '@mui/material/Container'
// import TopAppBar from './appbar.js'
// import BottomBar from './bottomBar.js'
// import utilStyles from '../css/utils.module.css'
// import configData from '../config.json'


// export default function BaseLayout({ children, hideLogo, hideLogin, userAccount }) {
//   return (
//     <>
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//         <meta
//           name="description"
//           content="{configData.METADATA.WEBSITE_DESCRIPTION}"
//         />
//         <meta
//           property="og:image"
//           content={`https://og-image.vercel.app/${encodeURI(
//             configData.METADATA.WEBSITE_NAME
//           )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//         />
//         <meta name="keywords" content={configData.METADATA.WEBSITE_TAGS} />
//         <meta name="og:title" content={configData.METADATA.WEBSITE_NAME} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <title>{configData.METADATA.WEBSITE_NAME}</title>
//       </Head>

//       <TopAppBar hideLogo={hideLogo}
//         hideLogin={hideLogin}
//         userAccount={userAccount}></TopAppBar>

//       <Container>
//         {children}
//         {hideLogo && (
//           <Link href="/">
//             <a>← Back to home</a>
//           </Link>
//         )}
//       </Container>

//       <BottomBar></BottomBar>

//     </>
//   )
// }
