import cel from '../../assets/device.png'

import { ButtonLink } from '../Button/styles'
import { Container } from './styles'

const Info = () => {
    return (
        <>
           <Container>
                <div>
                <h1>Transforme ideias em resultados</h1>
                <p>Criação de sites, apps e sistemas personalizados para levar sua empresa ao próximo nível!</p>
                <ButtonLink to={'/portifolio'}>Saiba mais</ButtonLink>
                </div>
                <img src={cel} alt="celular" />           
            </Container>
        </>
    )
}


export default Info