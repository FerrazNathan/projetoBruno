import Head from 'next/head'
import Login from '../components/Login'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Projeto Bruno</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https: //fonts.googleapis.com/css2? family= Dancing+Script:wght@600 & display=swap" rel="stylesheet"></link>
      </Head>
      <h1> Você está na home</h1>
    </div>
  )
}
