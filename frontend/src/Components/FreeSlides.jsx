
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import foodInfo from '../Data/FoodInfo';
import FreeSlidesCard from './FreeSlidesCard';

function createFreeSlides(foodInfo){
    return(
        <SwiperSlide>
            <FreeSlidesCard
                header = {foodInfo.header}
                img = {foodInfo.img}
                preface = {foodInfo.preface}
                creator = {foodInfo.creator}
            />
        </SwiperSlide>
    )
}

function FreeSlides() {
    return ( 
        <div className='FreeSlides'>
            <Swiper
                className='FreeSlides__swiper'
                modules={[Autoplay, FreeMode]}
                spaceBetween={100} 
                slidesPerView={5} 
                loop={true}
                autoplay={{ delay: 4000 }}
                freeMode={true}
            > 
                {foodInfo.map(createFreeSlides)}
            </Swiper>
        </div>
    );
}

export { createFreeSlides };
export default FreeSlides;
