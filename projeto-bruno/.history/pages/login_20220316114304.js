import React from 'react'
import Form from '../components/Login'
import * as S from '../styles/styleLogin'

export default function Login() {
  return (
    <S.Content>
      <S.Box>
        <S.Title>Sandy & Bruno</S.Title>
      </S.Box>
      <Form />
    </S.Content>
  )
}
