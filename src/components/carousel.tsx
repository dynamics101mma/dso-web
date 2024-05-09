
import { Carousel } from "flowbite-react";

interface Image {
  src: string;
  alt: string;
  link: string;
}

interface CarouselComponentProps {
  images: Image[];
  slideInterval?: number;
  className: string
}



export const CarouselComponent: React.FC<CarouselComponentProps> = ({ images, slideInterval = 2000, className = "" }) => {
  return (
    <Carousel indicators={false} slideInterval={slideInterval}>
      {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className={className} />
      ))}
    </Carousel>
  );
}