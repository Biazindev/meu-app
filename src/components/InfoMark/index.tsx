import market from '../../assets/market.png'

import { ButtonLink } from '../Button/styles'
import { Container } from './styles'

const InfoMark = () => {
    return (
        <>
           <Container>
           <img src={market} alt="celular" />           
                <div>
                <h1>Domine o mercado digital</h1>
                <p>Sites responsivos, aplicativos intuitivos e soluções que conectam você ao seu cliente!</p>
                <ButtonLink to={'/portifolio'}>Saiba mais</ButtonLink>
                </div>
            </Container>
        </>
    )
}


export default InfoMark