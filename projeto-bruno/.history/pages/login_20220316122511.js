import React from 'react'
import Head from 'next/head'
import Form from '../components/Login'
import * as S from '../styles/styleLogin'
import '../styles/global.css'

export default function Login() {
  return (
    <>
    <Head>
    <title>Projeto Bruno</title>
 
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
