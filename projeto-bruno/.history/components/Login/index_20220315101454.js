import React from 'react'
import * as S from './styles'

export default function Login() {
  return (
    <S.Container>
      <S.Title>Seja bem vindo, faça login para continuar </S.Title>  
      <S.Input type="password" placeholder="Informe sua senha" />
      <S.Button> Entrar com sua senha agora </S.Button>
    </S.Container>
  )
}
