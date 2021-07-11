import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout';
import server_api from '../../components/server_api';
import Footer from "../../components/footer";
import { connect } from 'react-redux';
import Seo from '../../components/Seo'
import TopSection from './components/TopSection'
import Slider from './components/Slider'
import BtnDiscoverAllCat from './components/Btn_DiscoverAllCat'
import BtnDiscoverAllServ from './components/Btn_DiscoverAllServ'
import BayerFreelancer from './components/BayerFreelancer'
import HowItIsWork from './components/HowItIsWork'
import Services from './components/Services'
import MeetFreelancers from './components/MeetFreelancers'
import FindTheRightPerson from './components/FindTheRightPers'
// animation
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


// M_UI component s


const Home = () => {
    // componnet states
    const [categories, setCategories] = useState(null)
    const [services, setServices] = useState(null)
    const [freelancers, setFreelancers] = useState(null)

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

    return (
        <Layout>
            <Seo title='Forlanso' />
            <TopSection />
            <Slider categories={categories} />
            <BtnDiscoverAllCat />
            <BayerFreelancer />
            <HowItIsWork />
            <Services services={services} />
            <BtnDiscoverAllServ />
            <MeetFreelancers freelancers={freelancers} />
            <FindTheRightPerson />
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