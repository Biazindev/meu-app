import { Container, Card, CardItem } from "./styles"
import Efood from '../../assets/Efood.png'
import { useInView } from 'react-intersection-observer'
import { ButtonLink } from "../Button/styles"
import WhatsAppLink from "../Whats"


const ListCard = () => {
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
    
    const descricao = 'Transforme sua loja com um site de tirar o fôlego, um app que encanta e um sistema de vendas que simplifica. Faça seu negócio brilhar no digital com nossas soluções sob medida'
    
    return (
        <>
            <Container>
                <Card ref={ref} className={inView ? 'visible' : ''}>
                    <div className="container">
                        <img src={Efood} alt="Seu App" />
                        <CardItem>
                            <div className="adjuste">
                                <h2>Do Físico para o Digital em Grande Estilo!</h2>
                                <p>{getDescricao('Transforme sua loja com um site de tirar o fôlego, um app que encanta e um sistema de vendas que simplifica. Faça seu negócio brilhar no digital com nossas soluções sob medida')}</p>
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

export default ListCard
