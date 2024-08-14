import fundo from '../../assets/header3.png'
import { ContainerHeader, Display, LinkHeader } from './styles'

const Header = () => {
    return(
        <ContainerHeader>
            <img src={fundo}/>
           <Display>
           <div>
                <p>Home</p>
            </div>
           <nav>
                <ul>
                    <li>
                        <p>Portifólio</p>
                    </li>
                    <li>
                       <p>Agenda</p>
                    </li>
                    <li>
                        <p>Contato</p>
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