import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import { Container, Contato, LinkRedes } from './styles';

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
                <img src={linkedin} alt="LinkedIn" />
                <img src={facebook} alt="Facebook" />
                <img src={github} alt="GitHub" />
                <img src={instagram} alt="Instagram" />
            </LinkRedes>
        </Contato>
    </Container>
);

export default Footer;
