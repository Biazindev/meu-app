import { Container, Card } from "./styles"
import seuApp from '../../assets/seuapp.png'
import WhatsAppLink from "../Whats"
import { useInView } from 'react-intersection-observer'

const Hero = () => {
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

export default Hero
