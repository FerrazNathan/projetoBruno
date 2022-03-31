import styled from 'styled-components'
import Image from 'next/image'

export const Title = styled.h1`
  font-family: 'Great Vibes', cursive;
  color: #9b867a;
  font-size: 64px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0;
`

export const Content = styled.div`
  & p {
    color: #9b867a;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif
	}
`

export const ContentImage = styled.div`
	display: flex;
	justify-content: center;
	margin: 40px
`

export const Thumbnail = styled(Image)`
  border-radius: 100px;
`



export const BoxComponents = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`
