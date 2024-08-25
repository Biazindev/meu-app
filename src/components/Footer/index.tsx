import linkedin from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import { Container, Contato, LinkRedes } from './styles'

const Footer = () => (
    <Container>
        <Contato>
        <div>
            <span>Tiago Biazin</span>
            <p>
                Especialista em Criação de Sites, aplicativos, e sistemas de
                gerenciamento para lojas, comércios em geral.
            </p>
        </div>
            <p>
                <span>Atendimento E-Mail</span><br />
                tiago.biazin02@gmail.com
            </p>
            <p>
                <span>Atendimento Whatsapp</span><br />
                (17) 98171-6648
            </p>
            
            <LinkRedes>
                <p><span>Redes Sociais</span></p>
                <a href="https://www.linkedin.com/in/tiagobiazin/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://www.facebook.com/tiago.tiagobiazin?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://github.com/Biazindev" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/tiago_adriana_biazin?igsh=MXNsNm9rcjZ2OHc4aw==" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
                </a>
            </LinkRedes>
        </Contato>
    </Container>
)

export default Footer
