import { Provider } from "react-redux"
import Description from "./components/Description"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import List from "./components/List"
import ListCard from "./components/ListCard"
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
