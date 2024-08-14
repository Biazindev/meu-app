import { Container, Card } from "./styles"
import Eplay from '../../assets/Eplay.png'
import { useInView } from 'react-intersection-observer'


const List = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })
    return (
        <Container>
            <Card ref={ref} className={inView ? 'visible' : ''}>
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, culpa suscipit eum laudantium dicta accusamus provident quisquam recusandae accusantium porro facilis id tenetur? Tempora atque laborum sint harum, commodi ea!</p>
                <img src={Eplay} alt="" />
            </div>
            </Card>
        </Container>
    )
}

export default List