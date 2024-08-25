import { useInView } from 'react-intersection-observer'

import caixa from '../../assets/caixa.jpg'
import { ButtonLink } from "../Button/styles"
import WhatsAppLink from "../Whats"

import { Container, Card, CardItem } from "./styles"



const Description = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    const phoneNumber = '5517981716648'
    const message = 'Olá, gostaria de saber mais sobre...'

    const getDescricao = (descricao: string) => {
        if (descricao.length > 117) {
            return descricao.slice(0, 114) + '...'
        }
        return descricao
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    return (
        <>
            <Container>
                <Card ref={ref} className={inView ? 'visible' : ''}>
                    <div className="container">
                        <CardItem>
                        <div className="adjuste">
                        <h2>Vendas Que Não Param!</h2>
                        <p>{getDescricao('Leve seu negócio para o próximo nível com soluções digitais que vendem por você 24/7. Websites modernos, apps intuitivos e sistemas de vendas integrados para sua loja faturar mais!')}</p>
                                <ButtonLink target="_blank" rel="noopener noreferrer" to={whatsappUrl}>Saiba mais</ButtonLink>
                        </div>
                        </CardItem>
                        <img src={caixa} alt="Seu App" />
                    </div>
                </Card>
            </Container>
            <WhatsAppLink />
        </>
    )
}

export default Description