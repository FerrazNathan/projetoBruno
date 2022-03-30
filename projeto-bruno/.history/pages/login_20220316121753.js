import React from 'react'
import Head from 'next/head'
import Form from '../components/Login'
import * as S from '../styles/styleLogin'

export default function Login() {
  return (
    <>
    <Head>
    <title>Projeto Bruno</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https: //fonts.googleapis.com/css2? family= Dancing+Script:wght@600 & display=swap" rel="stylesheet"/>
  </Head>
    <S.Content>
      <S.Box>
        <S.Title>Sandy & Bruno</S.Title>
      </S.Box>
      <Form />
    </S.Content>
    </>
  )
}
