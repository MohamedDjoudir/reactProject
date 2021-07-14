import React from 'react';
import { useTranslation } from 'react-i18next';
// M_UI component s
import { ExpandMore, Twitter, LinkedIn, Instagram, Facebook, ChevronRight } from '@material-ui/icons';
import { TreeView, TreeItem } from '@material-ui/lab/';
import {useStyles} from "./FooterStyle"; 
// assets
import payoneer from "../../assets/home-assets/payoneer.svg"
import paypal from "../../assets/home-assets/paypal.svg"
import visa from "../../assets/home-assets/visa.svg"
import mastercard from "../../assets/home-assets/mastercard.svg"
export default function Footer() {
    // component states
    const [expanded, setExpanded] = React.useState([]);
    const classes = useStyles(expanded)();
    const { t} = useTranslation();


    const handleToggle = (event, nodeIds) => {
 
        switch (nodeIds[0]) {
            case "node1":
                setExpanded(["node1"])
                break;
            case "node2":
                setExpanded(["node2"])
                break;
            case "node3":
                setExpanded(["node3"])
                break;
            default:
                setExpanded([]);
                break;
        }
    };
 


    


    return (
        <div>
            <div className={classes.footer}>
                <div className={classes.TreeViewDesk}>
                    <TreeView className={classes.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMore className={classes.iconTreeDes} />}
                        expanded={["241"]}
                        onNodeToggle={handleToggle}
                    >
                        <TreeItem nodeId="241" label={<div className={classes.label}  > {t('Company')}</div>} >
                            <TreeItem nodeId="2" label={<div className={classes.TreeitemForn} >{t('About_Forlanso')}</div>} className={classes.Treeitem} style={{
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
                        defaultCollapseIcon={<ExpandMore className={classes.iconTreeDes} />}
                        defaultExpandIcon={<ChevronRight />}
                        expanded={["152"]}
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
                        defaultCollapseIcon={<ExpandMore className={classes.iconTreeDes} />}
                        defaultExpandIcon={<ChevronRight />}
                        expanded={['25']}
                    >
                        <TreeItem nodeId="25" label={<div className={classes.label} > {t('Legal')}</div>} >
                            <TreeItem nodeId="222" label={<div className={classes.TreeitemForn}  >{t('Privacy_policy')}</div>} className={classes.Treeitem} style={{
                                marginTop: "15px"
                            }} />
                            <TreeItem nodeId="333" label={<div className={classes.TreeitemForn}  >{t('Terms_Conditions')}</div>} className={classes.Treeitem} />
                        </TreeItem>
                    </TreeView>
                </div>
                {/* mob */}
                <div className={classes.TreeViewMobile}>
                    <TreeView className={classes.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMore />}
                        defaultExpandIcon={<ChevronRight className={classes.iconTreeMob} />}
                        expanded={expanded}
                        onNodeToggle={handleToggle}
                    >
                        <TreeItem nodeId="node1" label={<div className={classes.label}  > {t('Company')}</div>} >
                            <TreeItem nodeId="2" label={<div className={classes.TreeitemForn} >{t('About_Forlanso')}</div>} className={classes.Treeitem} style={{
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
                        defaultCollapseIcon={<ExpandMore />}
                        defaultExpandIcon={<ChevronRight className={classes.iconTreeMob} />}
                        expanded={expanded}
                        onNodeToggle={handleToggle}
                    >
                        <TreeItem
                            nodeId="node2" label={<div className={classes.label} > {t('Terms')}</div>} >
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
                        defaultCollapseIcon={<ExpandMore />}
                        defaultExpandIcon={<ChevronRight className={classes.iconTreeMob} />}
                        expanded={expanded}
                        onNodeToggle={handleToggle}
                    >
                        <TreeItem nodeId="node3" label={<div className={classes.label} > {t('Legal')}</div>} >
                            <TreeItem nodeId="222" label={<div className={classes.TreeitemForn}  >{t('Privacy_policy')}</div>} className={classes.Treeitem} style={{
                                marginTop: "15px"
                            }} />
                            <TreeItem nodeId="333" label={<div className={classes.TreeitemForn}  >{t('Terms_Conditions')}</div>} className={classes.Treeitem} />
                        </TreeItem>
                    </TreeView>
                </div>
            </div>
            <div className={classes.socialMediaWrapper}>
                <div className={classes.socialMediaIconWrapper}>
                    <Twitter className={classes.socialMediaIcon} />
                </div>
                <div className={classes.socialMediaIconWrapper}>
                    <LinkedIn className={classes.socialMediaIcon} />
                </div >
                <div className={classes.socialMediaIconWrapper}>
                    <Instagram className={classes.socialMediaIcon} />
                </div>
                <div className={classes.socialMediaIconWrapper}>
                    <Facebook className={classes.socialMediaIcon} />
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
