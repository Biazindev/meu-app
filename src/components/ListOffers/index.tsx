import { useInView } from "react-intersection-observer"
import { Card, Container } from "./styles"
import WhatsAppLink from "../Whats"
import seuApp from '../../assets/seuapp.png'

const ListOffers = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    return (
        <>
            <Container>
                <Card ref={ref} className={inView ? 'visible' : ''}>
                    <div className="container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, culpa suscipit eum laudantium dicta accusamus provident quisquam recusandae accusantium porro facilis id tenetur? Tempora atque laborum sint harum, commodi ea!</p>
                        <img src={seuApp} alt="Seu App" />
                    </div>
                </Card>
            </Container>
            <WhatsAppLink />
        </>
    )
}

export default ListOffers
