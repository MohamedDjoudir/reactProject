import React from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Seo from '../components/Seo'
const Page2 = ({ total, add1, remove1 }) => {
    const { t } = useTranslation();
    const useStyles = makeStyles(theme => ({
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
    }))
    const classes = useStyles();

    return (
        <Layout>
            <Seo title='Page 2 | Forlanso' />
            <div className="App">
                <h4 style={{ textAlign: "center" }}>{t('title2')}</h4>
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
                        <Link to={"/"}  >
                            {t("page1")}</Link>

                    </div>
                </div>
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