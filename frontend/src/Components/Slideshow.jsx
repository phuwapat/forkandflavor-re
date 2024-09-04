
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import SlideshowCard from './SlideshowCard';
import foodInfo from '../Data/FoodInfo';

function createSwiperSlide(foodInfo){
    return (
        <SwiperSlide>
            <SlideshowCard
            name={foodInfo.name}
            img={foodInfo.img}
            filter1={foodInfo.filter1}
            filter2={foodInfo.filter2}
            rate={foodInfo.rate}
            cookTime={foodInfo.cookTime}
            yield={foodInfo.yield}
            creator={foodInfo.creator}
            rateCount={foodInfo.rateCount}
            />
        </SwiperSlide>
    )
}

function Slideshow() {
    return (  
        <div className="Slideshow">
            <Swiper
                className='Swiper'
                modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                effect='fade'
                autoplay={{delay: 4000}}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{ 
                    clickable: true ,
                    bullet:'.swiper-pagination'
                }}
                
                >
                    
                {foodInfo.slice(0,3).map(createSwiperSlide)}

                <div class="swiper-button-next "><div className='btn-border right'></div></div>
                <div class="swiper-button-prev"><div className='btn-border left'></div></div>
                <div class="swiper-pagination"></div>
            </Swiper>
        </div>
    )
}

export default Slideshow;