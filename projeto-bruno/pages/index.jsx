import React from 'react'
import Head from 'next/head'
import { dataText } from '../src/common/constants/dataText'
import Menu from '../components/Menu'
import * as S from '../pages/login'
import Imagem from '../src/assets/indice.jpeg'

export default function Home() {
	return (
		<>
			<Head>
				<title>{dataText.TITLEPAGE}</title>
			</Head>
			<S.ContentImage>
				<S.Thumbnail
					src={Imagem}
					alt='Foto do casal'
					width={250}
					height={250}
				/>
			</S.ContentImage>
			<S.Content>
				<S.Title>{dataText.TITLE}</S.Title>
				<p>{dataText.DATE}</p>
			</S.Content>
			<S.BoxComponents>
				<Menu />
			</S.BoxComponents>
		</>
	)
}
