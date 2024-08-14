import Description from "./components/Description"
import Header from "./components/Header"
import Hero from "./components/Hero"
import List from "./components/List"
import ListCard from "./components/ListCard"
import { GlobalCss } from "./styles"

function App() {
  return (
    <>
    <GlobalCss />
    <Header />
    <Hero />
    <Description />
    <List />
    <ListCard />
    </>
  )
}

export default App
