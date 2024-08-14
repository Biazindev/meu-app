import linkedin from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import { Container, Contato } from './styles'



const Footer = () => (
    <Container>
        <div>
            <span>Tiago Biazin</span>
            <p>Especialista em Criação de Sites, aplicativos,
               e sistemas de gerenciamento para lojas, comércios 
               em geral.
            </p>
        </div>
        <Contato>
        <p>
                <span>Atendimento E-Mail</span><br />
                    tiago.biazin02@gmail.com
            </p>
            <p>
                <span>Atendimento Whatsapp</span><br />
                    (17) 98171-6648
            </p>
        </Contato>
            <div>
            <p>Redes Sociais</p>
                <img src={linkedin} alt="" />
                <img src={facebook} alt="" />
                <img src={github} alt="" />
                <img src={instagram} alt="" />
            </div>
    </Container>
)


export default Footer