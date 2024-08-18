import { useInView } from "react-intersection-observer"
import { Card, Container, CardItem } from "./styles"
import WhatsAppLink from "../Whats"
import seuApp from '../../assets/seuapp.png'
import { ButtonLink } from "../Button/styles"

const ListOffers = () => {
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
                    <img src={seuApp} alt="Seu App" />
                        <CardItem>
                        <div className="adjuste">
                        <h2>Seu comércio na palma da mão!</h2>
                        <p>{getDescricao('Chegou a hora de colocar sua loja no bolso dos seus clientes. Desenvolvemos sites, apps e sistemas de vendas que aumentam suas conversões e facilitam o dia a dia. Vamos conversar?')}</p>
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

export default ListOffers
