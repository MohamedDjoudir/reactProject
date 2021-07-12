import React from 'react'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';

// mui
import { makeStyles } from '@material-ui/core/styles';
// animation
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
 // swiiper api 
 SwiperCore.use([Autoplay, Navigation]);
const Slider = ({ categories }) => {
    const { t, i18n } = useTranslation();
    //styling
    const useStyles = makeStyles(theme => ({
        categories: {
            fontSize: "27px",
            width: "max-content",
            margin: "0 auto",
            fontFamily: "'Almarai',sans-serif",
            color: "#303030",
            fontWeight: "400"
        },
        sliderTitleWrapper: {
            margin: "2rem auto ",
            background: "white"
        },
        sliderWrapper: {
            background: "white"
        },
        discover: {
            textTransform: "none",
            padding: "5px 2rem",
            fontFamily: "'Almarai',sans-serif",
            margin: "2rem auto"
        },
    }))
    const classes = useStyles();
    return (
        <>
            <div className={classes.sliderWrapper}>
                <div className={classes.sliderTitleWrapper}>
                    <h2 className={classes.categories}>{t('categories')}</h2>
                </div>
                <div className="SwiperWrapper">
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
                                        <div className="img-wrapper">
                                            <img src={"https://www.forlanso.com/" + item.icon} alt={item['name_' + i18n.language]}
                                                className="slider-photo" />
                                            <div className="black-layer">
                                                <div className=" textInImg">{item['name_' + i18n.language]}</div>
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