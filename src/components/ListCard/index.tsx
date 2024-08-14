import { Container, Card } from "./styles"
import Efood from '../../assets/Efood.png'


const ListCard = () => {
    return (
        <Container>
            <Card>
                <div className="container">
                    <img src={Efood} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, culpa suscipit eum laudantium dicta accusamus provident quisquam recusandae accusantium porro facilis id tenetur? Tempora atque laborum sint harum, commodi ea!</p>
                </div>
            </Card>
        </Container>
    )
}

export default ListCard