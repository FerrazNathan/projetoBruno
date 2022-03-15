import React from 'react'

export default function Login() {
  return (
    <Container>
      <Title>Seja bem vindo, faça login para continuar </Title>
      <Input type="email" placeholder="Informe seu email"
        value={email} onChange={e => setEmail(e.target.value)}
      />
      <Input type="password" placeholder="Informe sua senha"
        value={pass} onChange={e => setPass(e.target.value)}
      />
      <Button onClick={login}> Entrar com e-mail agora </Button>
      <Button primary onClick={cadastro}> Cadastre com e-mail agora </Button>
    </Container>
  )
}
