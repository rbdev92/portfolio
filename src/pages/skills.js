import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>Renato Brito // Skills</title>
        <meta name="description" content="Habilidades de Renato Brito" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Página Skills</h1>
        <Link href="/">Home</Link>
      </main>
    </>
  )
}
