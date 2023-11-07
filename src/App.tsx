import CardsDisplay from './containers/CardsDisplay/CardsDisplay'
import MainToolbar from './containers/MainToolbar'
import GlobalStyle, { Container } from './styles'

function App() {

  return (
    <div>
      <GlobalStyle />
      <Container>
        <MainToolbar />
        <CardsDisplay />
      </Container>
    </div>
  )
}

export default App
