import { Container, Card } from "./styles"
import caixa from '../../assets/caixa.jpg'


const Description = () => {
    return (
        <Container>
            <Card>
                <div className="container">
                    <img src={caixa} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, culpa suscipit eum laudantium dicta accusamus provident quisquam recusandae accusantium porro facilis id tenetur? Tempora atque laborum sint harum, commodi ea!</p>
                </div>
            </Card>
        </Container>
    )
}

export default Description