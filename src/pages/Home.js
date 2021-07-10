import React, { useState, useEffect } from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Layout from '../components/layout';
import server_api from '../components/server_api';
import { Link } from "react-router-dom";


// animation
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// importing assets 
import searchIcon from "../assets/home-assets/find-seller.svg"
import bag from "../assets/home-assets/bag.svg"
import protection from "../assets/home-assets/protection.svg"
import shiping from "../assets/home-assets/shiping.svg"


// M_UI component s
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Hidden } from '@material-ui/core';



const Home = () => {
    // componnet states
    const [categories, setCategories] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    // mobile screen detecter
    const handleResize = () => {
        if (window.innerWidth < 971) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        if (window.innerWidth < 900) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
        window.addEventListener("resize", handleResize)
    }, [])
    // componnet did mount
    useEffect(() => {
        // swiiper api 
        SwiperCore.use([Autoplay, Navigation]);

        // fetchData
        async function fetchData() {
            // get categories
            const res = await server_api.get(`categories`)
            setCategories(res.data.data)
            console.log(res.data.data)

        }
        fetchData()

    }, [])

    // language
    const { t, i18n } = useTranslation();
    // classNames

    const useStyles = makeStyles(theme => ({
        search: {
            position: 'relative',
            backgroundColor: "#ffff",
            borderRadius: "2px",

            padding: "0",
            height: "66px",
            minHeight: "50px",
            width: '100%',
            '&:hover': {
                backgroundColor: "#eeee",
            },
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },
        },
        inputFocused: {
            border: "1px solid #65c042 "

        },

        inputRoot: {
            color: '#4d4d4f',
            width: '100%',
            minHeight: "50px",
            maxHeight: "66px",
            fontFamily: "'Almarai',sans-serif",
            padding: i18n.language === 'ar' ? "0 15px 0 0" : "0 0 0 15px",
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },


        },
        inputInput: {
            // vertical padding + font size from searchIcon
            width: '100%',
        },
        search_icon: {
            background: "#65c042",
            height: "66px",
            minHeight: "50px",
            width: "66px",
            minWidth: "50px",
            maxHeight: "66px",
            margin: "0",
            justifyContent: "center",
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },
        },
        chip: {
            fontFamily: "'Almarai',sans-serif",
            margin: "15px 10px",
            [theme.breakpoints.down('sm')]: {
                display: "none",
            },

        },
        categories: {
            fontSize: "27px",
            width: "max-content",
            margin: "0 auto",
            fontFamily: "'Almarai',sans-serif",
            color: "#303030",
            fontWeight: "400"
        },
        sliderWrapper: {
            margin: "2rem auto ",
        },
        discover: {
            textTransform: "none",
            padding: "5px 2rem",
            fontFamily: "'Almarai',sans-serif",
            margin: "2rem auto"
        },
        discovertext: {
            fontSize: "18px"
        },
        features: {
            margin: "2rem auto 1rem",
            background: "#fff",
            maxWidth: "360px",
            height: "260px",
            display: isMobile ? "block" : "flex",
            justifyContent: isMobile ? "" : "space-between",
            flexDirection: "column",


        },
        featuresText: {
            fontSize: "1.125rem",
            color: "#303030",
            fontFamily: "'Almarai',sans-serif",
            textAlign: i18n.language === 'ar' ? isMobile ? "right" : "center" : isMobile ? "left" : "center",
            maxHeight: isMobile ? "" : "360px",
            overflow: "Hidden",
 
        },
        sign_up_like_freelanser_imgWrapper: {
            margin: isMobile ? "2rem auto" : "0",
            width: isMobile ? "90%" : "100%",
            maxWidth: '380px'


        },
        sign_up_like_freelanser: {
            margin: "2rem auto",
            width: "100%",
        },
        howItWorkItemWraper: {
            padding: "20px 0",
            background: "#e6f7fd",
            display: isMobile ? "block" : "flex",


        },
        howItWorkWrapper: {
            background: "#e6f7fd",
            padding: "20px 0",
        },
        howItWorkItemTitle: {
            width: "max-content",
            margin: "20px auto",
            fontFamily: "'Almarai',sans-serif",
            fontSize: isMobile ? "23px" : "30px",
            color: "#303030",
        },
        howItWorkItemIcon: {
            background: "#70d549",
            padding: isMobile ? "13px" : "33px",
            marginLeft: "1.7rem",
            marginRight: "1.3rem",
            width: isMobile ? "50px" : "130px",
            height: isMobile ? "50px" : "130px",
        },
        featuresTextSec: {
            fontFamily: "'Almarai',sans-serif",
            lineHeight: "27px",
             textAlign: i18n.language === 'ar' ? isMobile ? "right" : "center" : isMobile ? "left" : "center"
        },
        bayerFreelancerWrapper: {
            display: isMobile ? "block" : "flex",
            alignItems: isMobile ? "" : "flex-start",
            justifyContent: isMobile ? "" : "center",

        },
        SwiperWrapper: {
            padding: "2rem 3rem !important",
            maxWidth: "1365px"
        },
        howItWorkItemWrapper: {
            flexDirection: isMobile ? "" : "column"
        },






    }));
    const classes = useStyles();


    return (
        <Layout>
            <section>
                <div className="body-header-section" >
                    <div className='body-header-section-img-wrapper'>
                        <div className='body-header-section-img' alt='best-services' />
                    </div>
                    <div className="text-wraper">
                        <div className="text-wraper-title" style={{ fontFamily: i18n.language !== 'ar' ? "'DM Sans', sans-serif" : '"Almarai", sans-serif' }}>
                            {t('bestFrellancer')}
                        </div>
                        <div className="text-wraper-description" style={{
                            fontFamily: i18n.language !== 'ar' ? "'Roboto', sans-serif" : '"Cairo", sans-serif',
                            lineHeight: i18n.language !== 'ar' ? "27px" : '35px',
                            fontWeight: "400"
                        }}>
                            {t('ForlansoDesc')}
                        </div>



                        <InputLabel htmlFor="search" style={{
                            color: "#ffffde", fontFamily: '"Almarai", sans-serif', margin: "7px 0", fontSize: "14px"

                        }}>
                            {t('try')}
                        </InputLabel>
                        <div className={classes.search}>
                            <InputBase
                                id="search"
                                placeholder={t('searchPlaceHolder')}
                                endAdornment={
                                    <InputAdornment position="start" className={classes.search_icon}>
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                    focused: classes.inputFocused
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <Chip className={classes.chip} label={t('translation')} />
                            <Chip className={classes.chip} label={t('logodesign')} />
                            <Chip className={classes.chip} label={t('webdesign')} />

                        </div>
                    </div>
                </div>
            </section>
            <div>
                <div className={classes.sliderWrapper}>
                    <h2 className={classes.categories}>{t('categories')}</h2>
                </div>
                <div className={classes.SwiperWrapper}>
                    <Swiper
                        spaceBetween={9}
                        slidesPerView={4}
                        navigation
                        loop={true}
                        dir="rtl"
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}
                    >
                        {
                            categories && categories.map((item, index) =>
                                <SwiperSlide key={index}>
                                    <a href={"https://www.forlanso.com/services?category=" + item.slug} target="_blanck">
                                        <div className="img-wrapper">
                                            <img src={"https://www.forlanso.com/" + item.icon} alt={item['name_' + i18n.language]}
                                                className="slider-photo" />
                                            <div className="black-layer">
                                                <div className=" textInImg">{item['name_' + i18n.language]}</div>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>

                <br />
                <div style={{ textAlign: "center" }}>
                    <Button variant='outlined' className={classes.discover} style={{ fontSize: "25px" }} color="primary">
                        <span className={classes.discovertext}>{t('discover')}</span>
                    </Button>
                </div >
                <div className={classes.bayerFreelancerWrapper} >
                    {/* bayer */}
                    <div>
                        <div className={classes.features}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('dedicated')}</div>}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('payment')}</div>}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className={classes.featuresText}
                                    primary={<div className={classes.featuresText}>{t('get_maximum_value')}</div>}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('work_with_your_budget')}</div>}
                                />
                            </ListItem>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Button variant='outlined' className={classes.discover} style={{ fontSize: "25px" }} color="primary">
                                <span className={classes.discovertext}>{t('join_us_a_buyer')}</span>
                            </Button>
                        </div >
                    </div>
                    {/* image */}
                    <div className={classes.sign_up_like_freelanser_imgWrapper}>
                        <img src='https://www.forlanso.com/why-forlanso.jpeg' alt="sign_up_like_freelanser" className={classes.sign_up_like_freelanser} />
                    </div>
                    {/* freelancer */}
                    <div>
                        <div className={classes.features}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('three_month_commission')}</div>}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('three_month_no_money')}</div>}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className={classes.featuresText}
                                    primary={<div className={classes.featuresText}>{t('mission_you_choose_from')}</div>}
                                />
                            </ListItem>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Button variant='outlined' className={classes.discover} style={{ fontSize: "25px" }} color="primary">
                                <span className={classes.discovertext}>{t('join_us_a_freelancer')}</span>
                            </Button>
                        </div >
                    </div >
                </div>
            </div>

            {/* how it work */}
            <div className={classes.howItWorkWrapper} >
                <div className={classes.howItWorkItemTitle}>
                    {t('how_it_work')}
                </div>
                <div className={classes.howItWorkItemWraper}>
                    <ListItem className={classes.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={searchIcon} className={classes.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div>
                            <h1 className={classes.featuresText}>{t('find_the')}</h1>
                            <div className={classes.featuresTextSec}>{t('find_the_desc')}</div>
                        </div>
                    </ListItem>
                    <ListItem className={classes.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={bag} className={classes.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div>
                            <h1 className={classes.featuresText}>{t('order')}</h1>
                            <div className={classes.featuresTextSec}>{t('order_desc')}</div>
                        </div>
                    </ListItem>
                    <ListItem className={classes.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={protection} className={classes.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div className={classes.featuresText}>
                            <h1 className={classes.featuresText}>{t('money')}</h1>
                            <div className={classes.featuresTextSec} >{t('money_desc')}</div>
                        </div>
                    </ListItem>
                    <ListItem className={classes.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={shiping} className={classes.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div className={classes.featuresText}>
                            <h1 className={classes.featuresText}>{t('receive')}</h1>
                            <div className={classes.featuresTextSec} >{t('receive_desc')}</div>
                        </div>
                    </ListItem>
                </div>

            </div>
        </Layout >
    )
}
export default Home
