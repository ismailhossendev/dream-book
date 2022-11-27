import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HeroCarousel = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                <div className='lg:h-[500px]'>
                    <img className='h-full object-cover' src="https://images.pexels.com/photos/4861363/pexels-photo-4861363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
                </div>
                <div className='lg:h-[500px]'>
                    <img className='h-full object-cover' src="https://i.ibb.co/C7nRHWy/Colorful-Kids-Book-Fair-Landscape-Banner.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default HeroCarousel;