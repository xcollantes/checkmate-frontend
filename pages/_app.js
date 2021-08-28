// This is where global CSS is kept.
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import global from '../css/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
