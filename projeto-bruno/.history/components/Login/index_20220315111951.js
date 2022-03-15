import React from 'react'
import * as S from './styles'

export default function Login() {
  return (
    <S.Container>
      <S.Title>Seja bem vindo</S.Title>  
      <S.Input type="password" placeholder="Informe sua senha" />
      <S.Button>Acessar</S.Button>
    </S.Container>
  )
}
