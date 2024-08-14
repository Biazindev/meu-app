import { Container, Card } from "./styles"
import Eplay from '../../assets/Eplay.png'


const List = () => {
    return (
        <Container>
            <Card>
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, culpa suscipit eum laudantium dicta accusamus provident quisquam recusandae accusantium porro facilis id tenetur? Tempora atque laborum sint harum, commodi ea!</p>
                <img src={Eplay} alt="" />
            </div>
            </Card>
        </Container>
    )
}

export default List