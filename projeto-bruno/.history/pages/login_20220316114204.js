import React from 'react'
import Form from '../components/Login'
import * as S from '../styles/styleLogin'

export default function Login() {
  return (
    <S.Content>
      <S.Box>
        <h1>Sandy & Bruno</h1>
        <img src='../src/assets/index.jpeg'></img>
      </S.Box>
      <Form />
    </S.Content>
  )
}
