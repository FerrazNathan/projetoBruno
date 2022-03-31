import React, { useState } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'
import { dataText } from '../../src/common/constants/dataText'

export default function Form() {

	const [password, setPassword] = useState('')
	const access = '9876543210'
	const redirect = useRouter()

	const submit = (event) => {
		event.preventDefault()

		if (password === access) {
			localStorage.setItem('logged', 'isLogged')
			redirect.push('/')
		}
	}

	return (
		<S.Container onSubmit={submit}>
			<S.Title>{dataText.TITLELOGIN}</S.Title>
			<S.Input
				type="password"
				placeholder="Informe sua senha"
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>
			<S.Button type='submit'>{dataText.TITLEBUTTON}</S.Button>
		</S.Container>
	)
}
