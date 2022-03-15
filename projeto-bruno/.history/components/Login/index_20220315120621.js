import React from 'react'
import * as S from './styles'

export default function Login() {

  const submit = () => {

  }

  return (
    <S.Container onSubmit={submit}>
      <S.Title>Esse site exige senha para acessá-lo:</S.Title>  
      <S.Input type="password" placeholder="Informe sua senha" />
      <S.Button>Acessar</S.Button>
    </S.Container>
  )
}
