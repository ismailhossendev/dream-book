import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HeroCarousel = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                <div>
                    <img src="https://assets.swap.com.bd/slider-images/fe9fc289c3ff0af142b6d3bead98a923/default/BCHKLbpio3U6kgmYuGlav3JdWhSplZySpGGkOO7u.png" />
                </div>
                <div>
                    <img src="https://assets.swap.com.bd/slider-images/fe9fc289c3ff0af142b6d3bead98a923/default/BCHKLbpio3U6kgmYuGlav3JdWhSplZySpGGkOO7u.png" />
                </div>
                <div>
                    <img src="https://assets.swap.com.bd/slider-images/fe9fc289c3ff0af142b6d3bead98a923/default/BCHKLbpio3U6kgmYuGlav3JdWhSplZySpGGkOO7u.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default HeroCarousel;