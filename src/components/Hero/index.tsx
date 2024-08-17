import { Container} from "./styles"
import WhatsAppLink from "../Whats"
import banner from '../../assets/banner.jpg'
import { ButtonLink } from "../Button/styles"

const Hero = () => {
  const phoneNumber = '5517981716648'
  const message = 'Olá, gostaria de saber mais sobre...'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    return (
        <>
            <Container>
                <img src={banner} alt="app"/>
                <ButtonLink to={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicite seu orçamento</ButtonLink>
                <div className="overlay"></div> 
                        <p>Dê um upgrade no seu negócio com um site incrível</p>
                            <span>Vamos fazer sua loja crescer no mundo digital!</span>
            </Container>
            <WhatsAppLink />
        </>
    )
}

export default Hero
