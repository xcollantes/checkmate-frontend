import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Product() {
  return (
    <Layout>
      <Head>
        <title>Checkmate</title>
      </Head>
      <h1>Xbox Series One X</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
    </Layout>
  )
}
