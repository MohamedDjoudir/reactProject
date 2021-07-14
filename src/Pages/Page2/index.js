import React from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
//import { makeStyles } from '@material-ui/core/styles';
import Seo from '../../components/Seo'
const Page2 = ({ total, add1, remove1 }) => {
    const { t } = useTranslation();
    /* const useStyles = makeStyles(theme => ({
        
    })) */
    //const classes = useStyles();
    return (
        <Layout>
            <Seo title='Page 2 | Forlanso' />
            <div className="App">
                <h4 style={{ textAlign: "center",height:"100vh" }}>{t('title2')}</h4>
                 
             </div>
        </Layout>
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
export default connect(mapStateToProps, mapDispatchToProps)(Page2)