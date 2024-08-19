import { Container } from "./styles"
import WhatsAppLink from "../Whats"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import banner1 from '../../assets/header.png'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/Efood.png'
import { ButtonLink } from "../Button/styles"

const Hero = () => {
  const phoneNumber = '5517981716648'
  const message = 'Olá, gostaria de saber mais sobre...'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  }

  return (
    <>
      <Container>
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="Banner 1" />
          </div>
          <div>
            <img src={banner2} alt="Banner 2" />
          </div>
          <div>
            <img src={banner3} alt="Banner 3" />
          </div>
        </Slider>
        <ButtonLink to={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Solicite seu orçamento
        </ButtonLink>
        <div className="overlay"></div>
      </Container>
      <WhatsAppLink />
    </>
  )
}

export default Hero
