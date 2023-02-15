import React from 'react'
// import { IonContent, IonPage } from '@ionic/react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper.min.css';
// import '@ionic/react/css/ionic-swiper.css';

import Carousel from 'react-bootstrap/Carousel';

function Banner() {
    return (
        <>
            <div className="container-fluid px-lg-4 mt-4">
                <div className="swiper swiper-container">
                    <Carousel controls={false}   autoPlay={true}  interval={2000} >

                        <Carousel.Item>
                            <img src='https://cdn.pixabay.com/photo/2019/10/08/04/16/dragon-palace-hotel-4534092_960_720.jpg' className="w-100 d-block" style={{ width: '800px', height: '400px' }} alt='img'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026452_960_720.jpg" className="w-100 d-block" style={{ width: '800px', height: '400px' }}  alt='img'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://cdn.pixabay.com/photo/2015/10/13/15/19/bodrum-986308_960_720.jpg" className="w-100 d-block" style={{ width: '800px', height: '400px' }} alt='img'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://cdn.pixabay.com/photo/2016/10/09/04/50/hotel-1725150_960_720.jpg" className="w-100 d-block" style={{ width: '800px', height: '400px' }} alt='img'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://cdn.pixabay.com/photo/2014/07/05/08/21/pool-384573_960_720.jpg" className="w-100 d-block" style={{ width: '800px', height: '400px' }} alt='img'/>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>

        </>
    )
}

export default Banner