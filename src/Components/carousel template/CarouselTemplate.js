import React from 'react';
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import SlickItems from "../slick items/slickItems";

const CarouselTemplate = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className={"d-flex"}>
                <div className={"heading-badge"}>
                    <h6 className={"mb-0"}>{props.title}</h6>
                </div>
            </div>
            <Container>
                <Slider {...settings}>
                    {props.data.map(item => {
                        return <SlickItems link={item.link} image={item.img}>
                            {item.title}
                        </SlickItems>
                    })}
                </Slider>
            </Container>
        </>
    );
};

export default CarouselTemplate;