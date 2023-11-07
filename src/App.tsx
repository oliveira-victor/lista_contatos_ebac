import { Provider } from 'react-redux'
import CardsDisplay from './containers/CardsDisplay'
import MainToolbar from './containers/MainToolbar'
import GlobalStyle, { Container } from './styles'

import store from './store'

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <MainToolbar />
        <CardsDisplay />
      </Container>
    </Provider>
  )
}

export default App
