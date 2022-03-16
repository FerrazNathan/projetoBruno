import React from 'react'
import Head from 'next/head'
import Form from '../components/Login'
import * as S from '../styles/styleLogin'


export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <S.Content>
        <S.Box>
          <S.Title>Bruno Macedo & Sandy Bruna</S.Title>
          <p>15/11/2022</p>
        </S.Box>
        <Form />
      </S.Content>
    </>
  )
}