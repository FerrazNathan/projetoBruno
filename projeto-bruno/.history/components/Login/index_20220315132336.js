import React, { useState } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'

export default function Form {

  const [password, setPassword] = useState('')
  const acesso = '9876543210'
  const redirect = useRouter()

  const submit = (event) => {
    event.preventDefault()

    if (password === acesso) {
      localStorage.setItem('logged', 'isLogged')
      redirect.push('/')
    }
  }

  return (
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
  )
}
