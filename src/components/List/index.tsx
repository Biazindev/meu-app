import { useInView } from 'react-intersection-observer'

import Eplay from '../../assets/header.png'
import { ButtonLink } from "../Button/styles"
import WhatsAppLink from "../Whats"

import { Container, Card, CardItem } from "./styles"


const List = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    const phoneNumber = '5517981716648'
    const message = 'Olá, gostaria de saber mais sobre...'

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    const getDescricao = (descricao: string) => {
        if (descricao.length > 117) {
            return descricao.slice(0, 114) + '...'
        }
        return descricao
    }

    return (
        <>
            <Container>
                <Card ref={ref} className={inView ? 'visible' : ''}>
                    <div className="container">
                    <img src={Eplay} alt="Seu App" />
                        <CardItem>
                        <div className="adjuste">
                        <h2>Conquiste Clientes Online e Off-line!</h2>
                        <p>{getDescricao('Com um site impactante, um app envolvente e um sistema de vendas que funciona em qualquer lugar, sua loja estará preparada para o sucesso em todas as frentes. Vamos começar?')}</p>
                                <ButtonLink target="_blank" rel="noopener noreferrer" to={whatsappUrl}>Saiba mais</ButtonLink>
                        </div>
                        </CardItem>
                    </div>
                </Card>
            </Container>
            <WhatsAppLink />
        </>
    )
}

export default List