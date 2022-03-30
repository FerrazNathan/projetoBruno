import React from 'react'
import * as S from './styles'

export default function Menu() {
	return (
		<S.Container>
			<S.Lista>
				<li onClick={() => window.location.href = '/'}>Home</li>
				<li onClick={() => window.location.href = '/'}>Os noivos</li>
				<li onClick={() => window.location.href = '/'}>Cerimônia</li>
				<li onClick={() => window.location.href = '/'}>Recepção</li>
				<li onClick={() => window.location.href = '/'}>Lista de presentes</li>
				<li onClick={() => window.location.href = '/'}>Confirme sua presença</li>
				<li onClick={() => window.location.href = '/'}>Recados</li>
			</S.Lista>
		</S.Container>
	)
}
