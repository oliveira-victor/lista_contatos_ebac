import { Provider } from 'react-redux'
import CardsDisplay from './containers/CardsDisplay'
import MainToolbar from './containers/MainToolbar'
import GlobalStyle, { Container } from './styles'

import store from './store'
import Footer from './containers/Footer'

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <MainToolbar />
        <CardsDisplay />
      </Container>
      <Footer />
    </Provider>
  )
}

export default App
