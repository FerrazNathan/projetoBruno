import styled from 'styled-components'
import Menu from './index'

export default {
	title: 'Components/Menu',
	component: Menu,
}

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MenuStory = () => (
	<Container>
		<Menu />
	</Container>
)
