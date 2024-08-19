import banner from '../../assets/icons/icons (1).jpg'
import { ButtonLink } from '../Button/styles'
import { Container } from './styles'

const Info = () => {
    return (
        <>
           <Container>
            <h1>Sistema Web, aplicativos Android, IOS e mais...</h1>
            <p>Desenvolvemos apps, sistemas, sites, soluções com inteligência artificial, integrações entre sistemas e muito mais!</p>
            <img src={banner} alt="" />
            <ButtonLink to={'/portifolio'}>Saiba mais</ButtonLink>
           </Container>
        </>
    )
}


export default Info