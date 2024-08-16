import { ButtonCv, Container, Card, Conteudo } from "./styles"
import eplay from '../../assets/eplaylist.png'
import WhatsAppLink from "../Whats";
import { ButtonContainer, ButtonLink } from "../Button/styles";


const Portifolio = () => {
    return (
        <>
            <Conteudo>
                <ButtonCv href="/curriculo.pdf" download="curriculo.pdf">
                    <ButtonContainer>Baixar CV</ButtonContainer>
                </ButtonCv>
               <Container>
               <Card>
                    <img src={eplay} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis reprehenderit veritatis tempora voluptatem rem magni nemo impedit laborum et nihil, fugiat quisquam praesentium ex ea, enim magnam eos quam.</p>
                    <button>Saiba mais</button>
                </Card>
                <Card>
                    <img src={eplay} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis reprehenderit veritatis tempora voluptatem rem magni nemo impedit laborum et nihil, fugiat quisquam praesentium ex ea, enim magnam eos quam.</p>
                    <button>Saiba mais</button>
                </Card>
                <Card>
                    <img src={eplay} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis reprehenderit veritatis tempora voluptatem rem magni nemo impedit laborum et nihil, fugiat quisquam praesentium ex ea, enim magnam eos quam.</p>
                    <button>Saiba mais</button>
                </Card>
                <Card>
                    <img src={eplay} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis reprehenderit veritatis tempora voluptatem rem magni nemo impedit laborum et nihil, fugiat quisquam praesentium ex ea, enim magnam eos quam.</p>
                    <button>Saiba mais</button>
                </Card>
                <Card>
                    <img src={eplay} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis reprehenderit veritatis tempora voluptatem rem magni nemo impedit laborum et nihil, fugiat quisquam praesentium ex ea, enim magnam eos quam.</p>
                    <button>Saiba mais</button>
                </Card>
                <Card>
                    <img src={eplay} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis reprehenderit veritatis tempora voluptatem rem magni nemo impedit laborum et nihil, fugiat quisquam praesentium ex ea, enim magnam eos quam.</p>
                    <ButtonContainer>Saiba mais</ButtonContainer>
                </Card>
               </Container>
               <WhatsAppLink />
            </Conteudo>
        </>
    );

}

export default Portifolio
