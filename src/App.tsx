import Footer from "./components/Footer"
import Header from "./components/Header"
import { GlobalCss } from "./styles"
import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"

function App() {
  return (
    
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
