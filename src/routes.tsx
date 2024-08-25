import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Agenda from "./components/Agenda"
import Contacts from "./components/Repositary"
import PortifolioPag from "./components/pages/PortifolioPag"
import Tech from "./components/pages/Tech"
import Contato from "./components/Contato"


const Rotas = () =>  (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/portifolio' element={<PortifolioPag />} />
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/form' element={<Contacts />} />
        <Route path='/tech' element={<Tech />}/>
        <Route path='/contact' element={<Contato />} />
    </Routes>
    )

    export default Rotas