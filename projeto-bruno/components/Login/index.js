import React from 'react'
import * as S from './styles'

export default function Login() {
  return (
    <S.Container>
      <S.Title>Esse site exige senha para acessá-lo:</S.Title>  
      <S.Input type="password" placeholder="Informe sua senha" />
      <S.Button>Acessar</S.Button>
    </S.Container>
  )
}
