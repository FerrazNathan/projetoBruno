import React, { useState } from 'react'
import * as S from './styles'

export default function Login() {

  const [password, setPassword] = useState('')

  const users = {
    acesso: 'liberado',
  }



  console.log(password);

  const submit = (event) => {
    event.preventDefault()
  }

  return (
    users.acesso === liberado ? (
      <S.Container onSubmit={submit}>
        <S.Title>Esse site exige senha para acessá-lo:</S.Title>
        <S.Input
          type="password"
          placeholder="Informe sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <S.Button type='submit'>Acessar</S.Button>
      </S.Container>
    ) : (
      <h1>Sai fora que vc não foi convidade</h1>
    )
  )
}
