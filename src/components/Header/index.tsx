import { Link } from 'react-router-dom'
import fundo from '../../assets/header3.png'
import { ContainerHeader, Display, LinkHeader } from './styles'

const Header = () => {
    return(
        <ContainerHeader>
            <img src={fundo}/>
           <Display>
           <div>
                <LinkHeader to={'/'}>Home</LinkHeader>
            </div>
           <nav>
                <ul>
                    <li>
                        <LinkHeader to={'/portifolio'}>Portifólio</LinkHeader>
                    </li>
                    <li>
                       <LinkHeader to={'/agenda'}>Agenda</LinkHeader>
                    </li>
                    <li>
                        <LinkHeader to={'/form'}>Contato</LinkHeader>
                    </li>
                    <li>
                        <p>Sobre</p>
                    </li>
                </ul>
            </nav>
           </Display>
        </ContainerHeader>
    )
}

export default Header