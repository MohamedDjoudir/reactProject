import React from 'react'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';

// mui
 // animation
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import styles from './Slider.module.scss'

import SwiperCore, { Autoplay, Navigation } from 'swiper';
 // swiiper api 
 SwiperCore.use([Autoplay, Navigation]);
const Slider = ({ categories }) => {
    const { t, i18n } = useTranslation();
     
     return (
        <>
            <div className={styles.sliderWrapper}>
                <div className={styles.sliderTitleWrapper}>
                    <h2 className={styles.categories}>{t('categories')}</h2>
                </div>
                <div className={styles.SwiperWrapper}>
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={4}
                        navigation
                        loop={true}
                        dir="rtl"
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            220: {
                                slidesPerView: 4,
                                spaceBetween: 0
                            },
                            320: {
                                slidesPerView: 4,
                                spaceBetween: 0
                            },
                            480: {
                                slidesPerView: 4,
                                spaceBetween: 0
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 2
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                                

                            },
                            1500: {
                                slidesPerView: 4,
                                spaceBetween: 30,

                            }
                        }}
                    >
                        {categories && categories.map((item, index) =>
                            <SwiperSlide key={index}>
                                <div style={{
                                    width: "100vw"
                                }}>
                                    <a href={"https://www.forlanso.com/services?category=" + item.slug} target="_blanck">
                                        <div className={styles.img_wrapper}>
                                            <img src={"https://www.forlanso.com/" + item.icon} alt={item['name_' + i18n.language]}
                                                className={styles.slider_photo} />
                                            <div className={styles.black_layer} >
                                                <div className={styles.textInImg}>{item['name_' + i18n.language]}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        )
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default Slider