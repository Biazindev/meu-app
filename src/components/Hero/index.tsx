import { Container, Card } from "./styles"
import seuApp from '../../assets/seuapp.png'


const Hero = () => {
    return (
        <Container>
            <Card>
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, culpa suscipit eum laudantium dicta accusamus provident quisquam recusandae accusantium porro facilis id tenetur? Tempora atque laborum sint harum, commodi ea!</p>
                <img src={seuApp} alt="" />
            </div>
            </Card>
        </Container>
    )
}

export default Hero