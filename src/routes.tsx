import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Agenda from "./components/Agenda"
import Contacts from "./components/Repositary"
import PortifolioPag from "./components/pages/PortifolioPag"


const Rotas = () =>  (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/portifolio' element={<PortifolioPag />} />
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/form' element={<Contacts />} />
    </Routes>
    )

    export default Rotas