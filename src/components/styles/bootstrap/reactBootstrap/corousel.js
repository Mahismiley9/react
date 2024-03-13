


import Carousel from 'react-bootstrap/Carousel';
import ImageComponent from '../../../img/img';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Corousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <ImageComponent imageURL={"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"} dimensions={{width:"50%",height:"400"}}/>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ImageComponent imageURL={"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"} dimensions={{width:"50%",height:"400"}}/>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ImageComponent imageURL={"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"} dimensions={{width:"50%",height:"400"}}/>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;