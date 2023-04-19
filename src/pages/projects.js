import Head from 'next/head'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Renato Brito // Projetos</title>
        <meta name="description" content="Projetos de Renato Brito" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Página Projetos</h1>
        <Link href="/">Home</Link>
      </main>
    </>
  )
}
