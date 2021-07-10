import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// M_UI component s
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
// assets
import payoneer from "../assets/home-assets/payoneer.svg"
import paypal from "../assets/home-assets/paypal.svg"
import visa from "../assets/home-assets/visa.svg"
import mastercard from "../assets/home-assets/mastercard.svg"
export default function Footer() {
    // component states
    const [isMobile2, setIsMobile2] = useState(false)
    const [expanded, setExpanded] = React.useState([]);
    const [expanded2, setExpanded2] = React.useState([]);
    const [expanded3, setExpanded3] = React.useState([]);
    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds); setExpanded2([]); setExpanded3([]);
    };
    const handleToggle2 = (event, nodeIds) => {
        setExpanded2(nodeIds); setExpanded3([]); setExpanded([])
    };
    const handleToggle3 = (event, nodeIds) => {
        setExpanded3(nodeIds); setExpanded([]); setExpanded2([]);
    };
    // mobile screen detecter
    const handleResize2 = () => {
        if (window.innerWidth < 600) {
            setIsMobile2(true)
        } else {
            setIsMobile2(false)
        }
    }
    useEffect(() => {
        if (window.innerWidth < 600) {
            setIsMobile2(true)
        } else {
            setIsMobile2(false)
        }
        window.addEventListener("resize", handleResize2)
    }, [])

    // classNames
    const useStyles = makeStyles({
        footer: {
            height: "calc(80vh - 80px)",
            maxHeight: "400px",
            margin: "10px auto",
            display: "flex",
            flexDirection: isMobile2 ? "column" : "row",
            padding: "7rem 5rem",
        },
        TreeView: {
            width: isMobile2 ? 0 : "35%",
            backgroundColor: 'transparent !important',
        },
        Treeitem: {
            marginTop: "5px",
            color: "#303030",
            backgroundColor: 'transparent !important',
            whiteSpace: "nowrap",
            '&:hover': {
                color: "#0fb3f0",
                backgroundColor: 'transparent !important',
                opacity: "1"
            }
        },
        TreeitemForn: {
            fontFamily: "'Almarai',sans-serif",
            whiteSpace: "nowrap",
        },
        label: {
            fontSize: isMobile2 ? "25px" : "22px",
            color: "#303030",
            borderBottom: "3px solid #0fb3f0",
            whiteSpace: "nowrap",
            width: "25px",
            fontFamily: "'Almarai',sans-serif",
        },
        socialMediaWrapper: {
            display: "flex",
            width: isMobile2 ? "100" : "40%",
            margin: "120px auto 20px auto",
            alignItems: "center",
            justifyContent: "center"
        },
        socialMediaIconWrapper: {
            margin: "0 1rem",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
        },
        socialMediaIcon: {
            fontSize: "clamp(1.8rem,calc(1.8rem + 3vw),3rem)",
            fill: "rgb(200,200,200)",
        },
        bottomBarr: {
            display: "flex",
            width: "100%",
            margin: "0px auto",
            alignItems: "center",
            padding: "15px 30px",
            flexDirection: isMobile2 ? "column" : "row",
            justifyContent: "space-between"
        },
        creditCardsWraper: {
            display: "flex",
            margin: "10px auto",
            alignItems: "center",
            justifyContent: "flex-start",
        },
        creditCardsIconWraper: {
            margin: " 0 1rem"
        },
        creditCardsIcon: {
            width: "clamp(25px,calc(25px + 1vw),40px)"
        },
        forlansoLogo: {
            whiteSpace: "nowrap",
        },
        grow: {
            flexGrow: "1"
        }
    });
    const theme = createTheme({
        palette: {
            primary: {
                main: "#00000000",
            },
            secondary: {
                main: "#00000000",
            },
        },
    });
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const iconTree = {
        transform: i18n.language === "ar" ? "rotateZ(180deg)" : "rotateZ(0)"
    }
    return (
        <div>
            <div className={classes.footer}>
                <ThemeProvider theme={theme}>
                    <TreeView className={classes.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={!isMobile2 ? <ExpandMoreIcon style={{ display: "none" }} /> : <ExpandMoreIcon />}
                        defaultExpandIcon={!isMobile2 ? <ChevronRightIcon style={{ display: "none" }} /> : <ChevronRightIcon style={iconTree} />}
                        expanded={!isMobile2 ? ["241"] : expanded}
                        onNodeToggle={handleToggle}
                    >
                        <TreeItem nodeId="241" label={<div className={classes.label}  > {t('Company')}</div>} >
                            <TreeItem nodeId="2" label={<div className={classes.TreeitemForn} >{t('About_Forlanso')}</div>} style={{
                                marginTop: "15px",
                            }} />
                            <TreeItem nodeId="3" label={<div className={classes.TreeitemForn}  >{t('How_it_works')}</div>} className={classes.Treeitem} />
                            <TreeItem nodeId="4" label={<div className={classes.TreeitemForn}  >{t('Forlanso_Company')}</div>} className={classes.Treeitem} />
                            <TreeItem nodeId="5" label={<div className={classes.TreeitemForn}  >{t('Dubai_Silicon_Oasis')}</div>} className={classes.Treeitem} />
                            <TreeItem nodeId="6" label={<div className={classes.TreeitemForn}  >{t('Dubai_United_Arab_Emirates')}</div>} className={classes.Treeitem} />
                            <TreeItem nodeId="7" label={<div className={classes.TreeitemForn}  >{t('info@forlanso')}</div>} className={classes.Treeitem} />
                            <TreeItem nodeId="8" label={<div className={classes.TreeitemForn}  >{t('00971-50-1514410')}</div>} className={classes.Treeitem} />
                        </TreeItem>
                    </TreeView>
                    <br />
                    <TreeView className={classes.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={!isMobile2 ? <ExpandMoreIcon style={{ display: "none" }} /> : <ExpandMoreIcon />}
                        defaultExpandIcon={!isMobile2 ? <ChevronRightIcon style={{ display: "none" }} /> : <ChevronRightIcon style={iconTree} />}
                        expanded={!isMobile2 ? ["152"] : expanded2}
                        onNodeToggle={handleToggle2}
                    >
                        <TreeItem
                            nodeId="152" label={<div className={classes.label} > {t('Terms')}</div>} >
                            <TreeItem nodeId="22" label={<div className={classes.TreeitemForn}  >{t('Know_your_rights')}</div>} className={classes.Treeitem} style={{
                                marginTop: "15px",
                            }} />
                            <TreeItem nodeId="33" label={<div className={classes.TreeitemForn}  >{t('Fees_And_Payments')}</div>} className={classes.Treeitem} />
                            <TreeItem nodeId="44" label={<div className={classes.TreeitemForn}  >{t('Publishing_Content')}</div>} className={classes.Treeitem} />
                        </TreeItem>
                    </TreeView>
                    <br />
                    <TreeView className={classes.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={!isMobile2 ? <ExpandMoreIcon style={{ display: "none" }} /> : <ExpandMoreIcon />}
                        defaultExpandIcon={!isMobile2 ? <ChevronRightIcon style={{ display: "none" }} /> : <ChevronRightIcon style={iconTree} />}
                        expanded={!isMobile2 ? ["25"] : expanded3}
                        onNodeToggle={handleToggle3}
                    >
                        <TreeItem nodeId="25" label={<div className={classes.label} > {t('Legal')}</div>} >
                            <TreeItem nodeId="222" label={<div className={classes.TreeitemForn}  >{t('Privacy_policy')}</div>} className={classes.Treeitem} style={{
                                marginTop: "15px"
                            }} />
                            <TreeItem nodeId="333" label={<div className={classes.TreeitemForn}  >{t('Terms_Conditions')}</div>} className={classes.Treeitem} />
                        </TreeItem>
                    </TreeView>
                </ThemeProvider>
            </div>
            <div className={classes.socialMediaWrapper}>
                <div className={classes.socialMediaIconWrapper}>
                    <TwitterIcon className={classes.socialMediaIcon} />
                </div>
                <div className={classes.socialMediaIconWrapper}>
                    <LinkedInIcon className={classes.socialMediaIcon} />
                </div >
                <div className={classes.socialMediaIconWrapper}>
                    <InstagramIcon className={classes.socialMediaIcon} />
                </div>
                <div className={classes.socialMediaIconWrapper}>
                    <FacebookIcon className={classes.socialMediaIcon} />
                </div>
            </div>
            <div>
                <div className={classes.bottomBarr}>
                    <div className={classes.creditCardsWraper}>
                        <div className={classes.creditCardsIconWraper}>
                            <img alt='payoneer' src={payoneer} className={classes.creditCardsIcon} />
                        </div>
                        <div className={classes.creditCardsIconWraper}>
                            <img alt='visa' src={visa} className={classes.creditCardsIcon} />
                        </div>
                        <div className={classes.creditCardsIconWraper}>
                            <img alt='mastercard' src={mastercard} className={classes.creditCardsIcon} />
                        </div>
                        <div className={classes.creditCardsIconWraper}>
                            <img alt='paypal' src={paypal} className={classes.creditCardsIcon} />
                        </div>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.forlansoLogo}>
                        © 2020 Forlanso
                    </div>
                </div>
            </div>
        </div >
    );
}
