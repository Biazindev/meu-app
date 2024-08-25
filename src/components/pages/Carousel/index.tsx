import { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ListOffers from "../../ListOffers"
import Description from "../../Description"
import ListCard from "../../ListCard"
import List from "../../List"

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnFocus: false,
        pauseOnHover: false
    }

    useEffect(() => {
        const slider = document.querySelector('.slick-slider')
        if (slider) {
            slider.addEventListener('focus', (e) => e.stopPropagation())
        }
    }, [])

    return (
        <>
            <Slider {...settings}>
                <div>
                    <ListOffers />
                </div>
                <div>
                    <Description />
                </div>
                <div>
                    <List />
                </div>
                <div>
                    <ListCard />
                </div>
            </Slider>
        </>
    )
}

export default Carousel
