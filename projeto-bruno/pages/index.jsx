import React from 'react'
import Head from 'next/head'
import { dataText } from '../src/common/constants/dataText'

export default function Home() {
	return (
		<div>
			<Head>
				<title>{dataText.TITLEPAGE}</title>
			</Head>
			<h1>{dataText.DATE}</h1>
		</div>
	)
}
