import React from 'react'
import Head from 'next/head'
import Form from '../../components/Login'
import Menu from '../../components/Menu'
import * as S from './styleLogin'
import { dataText } from '../../src/common/constants/dataText'

export default function Login() {
	return (
		<S.Container>
			<Head>
				<title>{dataText.TITLEPAGE}</title>
			</Head>
			<S.Content>
				<S.Box>
					<S.Title>{dataText.TITLE}</S.Title>
					<p>{dataText.DATE}</p>
				</S.Box>
				<Form />
				<Menu />
			</S.Content>
		</S.Container>
	)
}
