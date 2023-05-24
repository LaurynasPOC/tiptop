import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { SimpleLink } from '@components/links';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Img1 from '@assets/photos/slide1.webp';
import Img2 from '@assets/photos/slide2.webp';
import Img3 from '@assets/photos/slide3.webp';
import { useQuery } from '@styles/breakpoints';
import { CarouselStyles, Slide, SliderIndicator, SliderNext, SliderPrev } from './styled';

const CarouselComponent: React.FC = () => {
  const { isDesktop } = useQuery();
  return (
    <CarouselStyles>
      <div />
      <Carousel
        renderIndicator={(clickHandler, isSelected) => (
          <SliderIndicator onClick={clickHandler} active={isSelected} />
        )}
        renderArrowPrev={(clickHandler, hasPrev) =>
          isDesktop && <SliderPrev onClick={clickHandler} active={hasPrev} />
        }
        renderArrowNext={(clickHandler, hasNext) =>
          isDesktop && <SliderNext onClick={clickHandler} active={hasNext} />
        }
        showArrows={isDesktop}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        showStatus={false}
        showThumbs={false}
        showIndicators={!isDesktop}
        autoPlay
        infiniteLoop={!isDesktop}
        interval={7000}
      >
        <Slide img={Img1}>
          <div>
            <h3>Embrace Active Lifestyle</h3>
            <p>Walk your dog. Jog in the park. Hike a mountain. Stay active.</p>
            <br />
            <p>
              TipTop allows you to explore the physical world in a new dynamic way. We reward active
              lifestyle to help you form healthy habits and improve your physical and mental health.
            </p>
            <Link to="/links">
              <Button variant="primary">Join Our Community</Button>
            </Link>
          </div>
          <div>
            <div>
              <i>“Everywhere is within walking distance if you have the time.”</i>
              <p>– Steven Wright</p>
            </div>
          </div>
        </Slide>
        <Slide img={Img2}>
          <div>
            <h3>Earn Through Movement</h3>
            <p>All exercise should be profitable. Period.</p>
            <br />
            <p>
              TipTop transforms all physical activity into a financially rewarding journey. With us,
              you can make income simply through movement. Achieve your fitness and financial goals
              at the same time!
            </p>
            <Button variant="primary">Download App</Button>
          </div>
          <div>
            <div>
              <i>“A journey of a thousand miles must begin with a single step.”</i>
              <p>– Lao Tzu</p>
            </div>
          </div>
        </Slide>
        <Slide img={Img3}>
          <div>
            <h3>Limit Your Carbon Footprint</h3>
            <p>We are committed to carbon neutrality in Web 3.0.</p>
            <br />
            <p>
              TipTop rewards movement to help us all reduce our environmental footprint. Our
              numerous partnerships and green initiatives with environmentally conscious companies
              demonstrate our commitment to a sustainable way of life.
            </p>
            <SimpleLink href="/contact">
              <Button variant="primary">Partnership Prospects</Button>
            </SimpleLink>
          </div>
          <div>
            <div>
              <i>“We cannot live on this planet as if we had another one to go to.”</i>
              <p> - Terri Swearingen</p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </CarouselStyles>
  );
};

export default CarouselComponent;
