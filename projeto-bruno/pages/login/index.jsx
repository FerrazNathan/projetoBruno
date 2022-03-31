import React from 'react'
import Head from 'next/head'
import Form from '../../components/Login'
import Menu from '../../components/Menu'
import * as S from './styleLogin'
import { dataText } from '../../src/common/constants/dataText'
import Imagem from '../../src/assets/indice.jpeg'

export default function Login() {
	return (
		<>
			<Head>
				<title>{dataText.TITLEPAGE}</title>
			</Head>
			<S.Content>
				<S.Title>{dataText.TITLE}</S.Title>
				<p>{dataText.DATE}</p>
			</S.Content>
			<S.ContentImage>
				<S.Thumbnail
					src={Imagem}
					alt='Foto do casal'
					width={200}
					height={200}
				/>
			</S.ContentImage>
			<S.BoxComponents>
				<Menu />
				<Form />
			</S.BoxComponents>
		</>
	)
}
