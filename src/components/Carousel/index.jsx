import { Card } from "../Card";
import { Container } from "./style";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export function CarouselTest({ title, disher }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 2540 },
            items: 5,
            partialVisibilityGutter: 100
        },
        desktop: {
            breakpoint: { max: 2549, min: 1024 },
            items: 3,
            partialVisibilityGutter: 60 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    };
    return (
        <Container>
            <div>
                <h2>{title}</h2>
            </div>
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={100}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carouselItem"
                partialVisible={true}
            >
                {disher && disher.map((dishers, index) => (
                    <Card key={index} id={dishers.id} img={dishers.img} name={dishers.name} description={dishers.description} liked={dishers.liked} price={dishers.price} />
                ))}
            </Carousel>
        </Container>
    );
}