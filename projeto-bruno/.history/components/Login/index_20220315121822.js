import React from 'react'
import * as S from './styles'

export default function Login() {

  [password, setPassword] = useState('')

  const submit = (event) => {
    event.preventDefault()
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
