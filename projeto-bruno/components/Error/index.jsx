import React from 'react'
import { dataText } from '../../src/common/constants/dataText'
import * as S from './styles'

export default function Error() {
	return (
		<S.Container>
			<S.Content>
				<h1>{dataText.ERROR}</h1>
				<p>{dataText.ERRORS}</p>
				<p>{dataText.DANGER}</p>
			</S.Content>
		</S.Container>
	)
}
