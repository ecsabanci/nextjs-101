import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <h1 className="title"> Welcome to Next.js!</h1>

      <style jsx>{`
        .title {
          color: white;
          background-color: blue;
        }
      `}</style>

      <style global jsx>{`
        body {
          background-color: yellow;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
