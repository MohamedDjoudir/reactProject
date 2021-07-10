import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout';
import server_api from '../components/server_api';
import { Link } from "react-router-dom";
import ServiceCard from "../components/servic_card";
import FreeLancerCard from "../components/freelancer_card";
import Footer from "../components/footer";
import { connect } from 'react-redux';
import Seo from '../components/Seo'
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
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';

const Home = ({ total, add1, remove1 }) => {
    // componnet states
    const [categories, setCategories] = useState(null)
    const [services, setServices] = useState(null)
    const [freelancers, setFreelancers] = useState(null)
    const [isTablete, setisTablete] = useState(false)
    const [isMobile, setisMobile] = useState(false)
    // mobile screen detecter
    const handleResize1 = () => {
        if (window.innerWidth < 971) {
            setisTablete(true)
        } else {
            setisTablete(false)
        }
    }
    const handleResize2 = () => {
        if (window.innerWidth < 600) {
            setisMobile(true)
        } else {
            setisMobile(false)
        }
    }
    useEffect(() => {
        if (window.innerWidth < 971) {
            setisTablete(true)
        } else {
            setisTablete(false)
        }
        if (window.innerWidth < 500) {
            setisMobile(true)
        } else {
            setisMobile(false)
        }
        window.addEventListener("resize", handleResize1)
        window.addEventListener("resize", handleResize2)
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
            // get services 
            const res2 = await server_api.get(`/service/search`, { params: { rows: 8 } })
            setServices(res2.data.data)
            // get freelancer 
            const res3 = await server_api.get(`freelancer`, { params: { rows: 3 } })
            setFreelancers(res3.data.data)
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
            height: "280px",
            display: isTablete ? "block" : "flex",
            justifyContent: isTablete ? "" : "space-between",
            flexDirection: "column",

        },
        featuresText: {
            fontSize: "1.125rem",
            color: "#303030",
            fontFamily: "'Almarai',sans-serif",
            textAlign: i18n.language === 'ar' ? isTablete ? "right" : "center" : isTablete ? "left" : "center",
            maxHeight: isTablete ? "" : "360px",
            overflow: "Hidden",
        },
        sign_up_like_freelanser_imgWrapper: {
            margin: isTablete ? "2rem auto" : "0",
            width: isTablete ? "90%" : "100%",
            maxWidth: '380px'

        },
        sign_up_like_freelanser: {
            margin: "2rem auto",
            width: "100%",
        },
        howItWorkItemWraper: {
            padding: "20px 0",
            background: "#e6f7fd",
            display: isTablete ? "block" : "flex",

        },
        howItWorkWrapper: {
            background: "#e6f7fd",
            padding: "20px 0",
        },
        howItWorkItemTitle: {
            width: "max-content",
            margin: "20px auto",
            fontFamily: "'Almarai',sans-serif",
            fontSize: isTablete ? "23px" : "30px",
            color: "#303030",
        },
        howItWorkItemIcon: {
            background: "#70d549",
            padding: isTablete ? "13px" : "33px",
            marginLeft: "1.7rem",
            marginRight: "1.3rem",
            width: isTablete ? "50px" : "130px",
            height: isTablete ? "50px" : "130px",
        },
        featuresTextSec: {
            fontFamily: "'Almarai',sans-serif",
            lineHeight: "27px",
            textAlign: i18n.language === 'ar' ? isTablete ? "right" : "center" : isTablete ? "left" : "center"
        },
        bayerFreelancerWrapper: {
            display: isTablete ? "block" : "flex",
            alignItems: isTablete ? "" : "flex-start",
            justifyContent: isTablete ? "" : "space-around",
        },
        howItWorkItemWrapper: {
            flexDirection: isTablete ? "" : "column"
        },
        servicesWrapper: {
            width: "100%",
            maxWidth: "1400px",
            overflow: "hidden",
        },
        freelancerWrapper: {
            width: "100%",
            overflow: "hidden",
        },
        freelancerCardWrapper: {
            margin: "60px auto"
        },
        Find_the_right_person: {
            height: "420px",
            width: "100vw",
            maxWidth: "1400px",
            background: "#034057",
            overflow: "hiddent",
            marginTop: "50px"
        },
        person_textwrapper: {
            height: "420px",
            display: "flex",
            margin: "0 auto",
            width: isTablete ? "100%" : "30%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
        },
        Find_the_right_person_text: {
            height: "80px",
            width: "100%",
            color: "white",
            fontSize: "30px",
            fontFamily: "'Almarai',sans-serif",
            position: "relative",

        },
        green_circle: {
            height: "100%",
            width: "100%",
            background: "transparent linear-gradient(180deg, #b6d43f, rgba(182,212,63,0)) 0 0 no-repeat padding-box",
            position: "absolute",
            bottom: "250px",
            top: "0",
            transform: "translate(50%,50%) rotate(180deg)",
            borderRadius: "50%",
            reight: "0",
            display: isMobile ? "none" : "block"
        },
        green_circle_wrapper: {
            width: "30vw",
            height: "30vw",
            maxHeight: "500px",
            maxWidth: "500px",
            overflow: "hidden",
            position: "absolute",
            bottom: "0",
            right: "0",

        },
        green_circle2: {
            height: "100%",
            width: "100%",
            background: "transparent linear-gradient(180deg,#00aeef,rgba(0,174,239,0)) 0 0 no-repeat padding-box;",
            position: "absolute",
            bottom: "250px",
            top: "0",
            left: "0",
            display: isMobile ? "none" : "block",
            transform: "translate(-50%,30%) rotate(250deg)",
            borderRadius: "50%",
        },
        green_circle_wrapper2: {
            width: "100%",
            height: "100%",
            maxHeight: "900px",
            maxWidth: "900px",
            overflow: "hidden",
            position: "relative",
            bottom: "0",
            left: "0",
        },
        green_circle_wrapper22: {
            width: "45vw",
            height: "420px",
            maxHeight: "900px",
            maxWidth: "900px",
            overflow: "hidden",
            position: "absolute",
            bottom: "0",
            left: "0",
        },
        viewBTN: {
            background: "#65c042",
            color: "#fff",
            borderRadius: "10px",
            fontFamily: "'Cairo',sans-serif",
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:hover": {
                background: "#92d878",
            }
        }
    }));
    const classes = useStyles();
    return (
        <Layout>
            <Seo title='Home | Forlanso' />
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
                <div className="SwiperWrapper">
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
            {/* services */}
            <div>
                <br />
                <br />
                <div className={classes.howItWorkItemTitle}>
                    {t('services')}
                </div>
                <div className={classes.servicesWrapper}>
                    {isTablete ?
                        <Grid style={{ padding: "10px", position: "relative", borderRadius: "7px", margin: "35px auto 0 auto", width: "100%", maxWidth: "1400px" }} >
                            <Grid item sm={12}>
                                <Grid container justifyContent="center" spacing={2}>
                                    {services && services.map((service, i) => <div key={"service" + i} style={{ width: isMobile ? "95vw" : "40%", minWidth: isMobile ? "95vw" : "40%" }} className={classes.card} >
                                        <ServiceCard service={service} index={i} />
                                    </div>)}
                                </Grid>
                            </Grid>
                        </Grid>
                        :
                        <Grid style={{
                            padding: "20px 50px",
                            position: "relative",
                            borderRadius: "10px",
                            margin: "35px auto 0 auto",
                            width: "100%",
                            maxWidth: "1400px",
                        }}
                        >
                            <Grid item xl={12} >
                                <Grid container justifyContent="center" spacing={2}>
                                    {services && services.map((service, i) => <div key={"service" + i} style={{ minWidth: "25%", width: "25%", maxWidth: "25%" }} className={classes.card}>
                                        <ServiceCard service={service} index={i} />
                                    </div>)}
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </div>
                <div style={{ textAlign: "center" }}>
                    <Button variant='outlined' className={classes.discover} style={{ fontSize: "25px" }} color="primary">
                        <span className={classes.discovertext}>{t('discover_all_services')}</span>
                    </Button>
                </div >
                {/* freelancers */}
                <div className={classes.howItWorkWrapper} >
                    <div className={classes.howItWorkItemTitle}>
                        {t('meet_qualified')}
                    </div>
                    <div className={classes.freelancerCardWrapper}>
                        {isTablete ?
                            <Grid style={{ padding: "10px", position: "relative", borderRadius: "7px", margin: "35px auto 0 auto", width: "100%", maxWidth: "1400px" }} >
                                <Grid item sm={12}>
                                    <Grid container justifyContent="center" spacing={2}>
                                        {freelancers && freelancers.map((freelancer, i) => <div key={"service" + i} style={{ margin: "20px auto", minWidth: "350px", width: "350px", maxWidth: "350px" }} className={classes.card}>
                                            <FreeLancerCard freelancer={freelancer} index={i} />
                                        </div>)}
                                    </Grid>
                                </Grid>
                            </Grid>
                            :
                            <Grid style={{
                                padding: "20px 50px",
                                position: "relative",
                                borderRadius: "10px",
                                margin: "35px auto 0 auto",
                                width: "100%",
                                maxWidth: "1400px",
                            }}
                            >
                                <Grid item xl={12} >
                                    <Grid container justifyContent="center" spacing={2}>
                                        {freelancers && freelancers.map((freelancer, i) => <div key={"service" + i} style={{ minWidth: "350px", width: "350px", maxWidth: "350px" }} className={classes.card}>
                                            <FreeLancerCard freelancer={freelancer} index={i} />
                                        </div>)}
                                    </Grid>
                                </Grid>
                            </Grid>
                        }
                    </div>
                </div>
            </div>
            {/* Find_the_right_person*/}
            <div className={classes.Find_the_right_person}>
                <div style={{ position: "relative" }}>
                    <div className={classes.person_textwrapper}>
                        <div className={classes.Find_the_right_person_text}>
                            {t("Find_the_right_person")}
                        </div>
                        <div>
                            <div style={{ textAlign: "center" }}>
                                <Button variant='contained' className={classes.viewBTN} style={{ fontSize: "25px" }} color="primary">
                                    <span className={classes.discovertext}>{t('discover_all_services')}</span>
                                </Button>
                            </div >
                        </div>
                    </div>
                    {(!isTablete && !isMobile) && <div className={classes.green_circle_wrapper}>
                        <div className={classes.green_circle}> </div>
                    </div>}
                    <div className={classes.green_circle_wrapper22}>
                        {(!isTablete && !isMobile) && <div className={classes.green_circle_wrapper2}>
                            <div className={classes.green_circle2}> </div>
                        </div>}
                    </div>
                </div>
            </div>
            {/* redux testing */}
            <div style={{
                textAlign: "center",
                fontSize: "20px"
            }}>
                <h1 >
                    {t('redux_testing')}
                </h1>
                {total}
                <div>
                    <Button className={classes.viewBTN} style={{ margin: "10px 10px" }} onClick={add1}>{t('add_1')} </Button>
                    <Button className={classes.viewBTN} style={{ margin: "10px 10px" }} onClick={remove1}>{t('remove_1')} </Button>
                    <br />
                    <br />
                    <Link to={"/page2"}  >
                        {t("page2")}</Link>
                </div>
            </div>
            {/* footer*/}
            <div className={classes.footer}>
                <Footer />
            </div>

        </Layout >
    )
}
const mapStateToProps = state => {
    return {
        total: state.total
    };
};
const mapDispatchToProps = dispatch => {
    return {
        add1: () => dispatch({ type: 'ADD' }),
        remove1: () => dispatch({ type: 'REMOVE' })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
