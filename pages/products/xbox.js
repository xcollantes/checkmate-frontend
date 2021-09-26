import Head from 'next/head'
import Link from 'next/link'
import BaseLayout from '../../components/BaseLayout'

export default function Product({}) {
  return (
    <BaseLayout>
      <Head>
        <title>{}</title>
      </Head>
      <h1>Xbox Series One X</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
    </BaseLayout>
  )
}
