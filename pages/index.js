import Layout from '../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch';
import Link from 'next/link';
import slug from 'slug';

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <h1 className="title"> The Rick and Morty </h1>

      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link href="/character/[slug]" as={`/character/${slug(character.name)}-${character.id}`}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>

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



// server tarafında çalışıyor. Fetch browserda tanımlı node tarafında değil..!!!!
// bu yüzden isomorphic unfetch kullanacağız.
export async function getStaticProps(context) {
  // data fetch
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    props: {
      characters // yukarıda da character diye tanımladığımız için character: character gibi tanımlanıyor..!!
    } // will be passed to the page component as props
  }
}

export default HomePage
