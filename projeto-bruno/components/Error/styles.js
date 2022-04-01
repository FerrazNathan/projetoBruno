import styled from 'styled-components'

export const Container = styled.section`
	position: relative;
	width: 440px;
	margin: 0 auto;
`

export const Content = styled.div`
	position: absolute;
	border: 1px solid #d5b985;
	width: 450px;
	height: 200px;
	border-radius: 10px;
	text-align: center;
	margin: 20px auto;
	background-color: #fcf8e3;
	font-family: 'Nunito Sans', sans-serif;
	margin-top: 110px;
	& h1{
		color: #d82424;
	}
	& p{
		color: #d5b985;
		font-weight: 600;
		font-size: 20px;
	}
`
