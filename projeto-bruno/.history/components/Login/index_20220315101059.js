import React from 'react'
import * as S from './styles'

export default function Login() {
  return (
    <S.Container>
      <S.Title>Seja bem vindo, faça login para continuar </S.Title>
      <S.Input type="email" placeholder="Informe seu email"
        value={email} onChange={e => setEmail(e.target.value)}
      />
      <S.Input type="password" placeholder="Informe sua senha" />
      <Button onClick={login}> Entrar com e-mail agora </Button>
      <Button primary onClick={cadastro}> Cadastre com e-mail agora </Button>
    </S.Container>
  )
}
