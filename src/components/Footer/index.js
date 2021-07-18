import React from 'react';
import { useTranslation } from 'react-i18next';
// M_UI component s
import { ExpandMore, Twitter, LinkedIn, Instagram, Facebook, ChevronRight } from '@material-ui/icons';
import { TreeView, TreeItem } from '@material-ui/lab/';
import styles from "./FooterStyle.module.scss";
// assets
import payoneer from "../../assets/home-assets/payoneer.svg"
import paypal from "../../assets/home-assets/paypal.svg"
import visa from "../../assets/home-assets/visa.svg"
import mastercard from "../../assets/home-assets/mastercard.svg"
export default function Footer() {
    // component states
    const [expanded, setExpanded] = React.useState([]);
    const { t } = useTranslation();


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
            <div className={styles.footer} style={{
                height: expanded.length !== 0 ? "430px" : "300px",
            }}>
                <div className={styles.TreeViewDesk}>
                    <TreeView className={styles.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMore className={styles.iconTreeDes} />}
                        expanded={["241"]}
                        onNodeToggle={handleToggle}
                    >
                        <TreeItem nodeId="241" label={<div className={styles.label}  > {t('Company')}</div>} >
                            <TreeItem nodeId="2" label={<div className={styles.TreeitemForn} >{t('About_Forlanso')}</div>} className={styles.Treeitem} style={{
                                marginTop: "15px",
                            }} />
                            <TreeItem nodeId="3" label={<div className={styles.TreeitemForn}  >{t('How_it_works')}</div>} className={styles.Treeitem} />
                             <TreeItem nodeId="4" label={<div className={styles.TreeitemNotFirst} >{t('Forlanso_Company')}</div>} className={styles.TreeitemNot} />
                            <TreeItem nodeId="5" label={<div className={styles.TreeitemNot}>{t('Dubai_Silicon_Oasis')}</div>} className={styles.TreeitemNot} />
                            <TreeItem nodeId="6" label={<div className={styles.TreeitemNot}>{t('Dubai_United_Arab_Emirates')}</div>} className={styles.TreeitemNot} />
                            <TreeItem nodeId="7" label={<div className={styles.TreeitemNot}>{t('info@forlanso')}</div>} className={styles.TreeitemNot} />
                            <TreeItem nodeId="8" label={<div className={styles.TreeitemNot}>{t('00971-50-1514410')}</div>} className={styles.TreeitemNot} />
                        </TreeItem>
                    </TreeView>
                    <br />
                    <TreeView className={styles.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMore className={styles.iconTreeDes} />}
                        defaultExpandIcon={<ChevronRight />}
                        expanded={["152"]}
                    >
                        <TreeItem
                            nodeId="152" label={<div className={styles.label} > {t('Terms')}</div>} >
                            <TreeItem nodeId="22" label={<div className={styles.TreeitemForn}  >{t('Know_your_rights')}</div>} className={styles.Treeitem} style={{
                                marginTop: "15px",
                            }} />
                            <TreeItem nodeId="33" label={<div className={styles.TreeitemForn}  >{t('Fees_And_Payments')}</div>} className={styles.Treeitem} />
                            <TreeItem nodeId="44" label={<div className={styles.TreeitemForn}  >{t('Publishing_Content')}</div>} className={styles.Treeitem} />
                        </TreeItem>
                    </TreeView>
                    <br />
                    <TreeView className={styles.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMore className={styles.iconTreeDes} />}
                        defaultExpandIcon={<ChevronRight />}
                        expanded={['25']}
                    >
                        <TreeItem nodeId="25" label={<div className={styles.label} > {t('Legal')}</div>} >
                            <TreeItem nodeId="222" label={<div className={styles.TreeitemForn}  >{t('Privacy_policy')}</div>} className={styles.Treeitem} style={{
                                marginTop: "15px"
                            }} />
                            <TreeItem nodeId="333" label={<div className={styles.TreeitemForn}  >{t('Terms_Conditions')}</div>} className={styles.Treeitem} />
                        </TreeItem>
                    </TreeView>
                </div>
                {/* mob */}
                <div className={styles.TreeViewMobile}>
                    <TreeView className={styles.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMore />}
                        defaultExpandIcon={<ChevronRight className={styles.iconTreeMob} />}
                        expanded={expanded}
                        onNodeToggle={handleToggle}
                    >
                        <TreeItem nodeId="node1" label={<div className={styles.label}  > {t('Company')}</div>} >
                            <TreeItem nodeId="2" label={<div className={styles.TreeitemForn} >{t('About_Forlanso')}</div>} className={styles.Treeitem} style={{
                                marginTop: "15px",
                            }} />
                            <TreeItem nodeId="3" label={<div className={styles.TreeitemForn}  >{t('How_it_works')}</div>} className={styles.Treeitem} />
                            <TreeItem nodeId="4" label={<div className={styles.TreeitemForn}  >{t('Forlanso_Company')}</div>} className={styles.TreeitemNot} />
                            <TreeItem nodeId="5" label={<div className={styles.TreeitemForn}  >{t('Dubai_Silicon_Oasis')}</div>} className={styles.TreeitemNot} />
                            <TreeItem nodeId="6" label={<div className={styles.TreeitemForn}  >{t('Dubai_United_Arab_Emirates')}</div>} className={styles.TreeitemNot} />
                            <TreeItem nodeId="7" label={<div className={styles.TreeitemForn}  >{t('info@forlanso')}</div>} className={styles.TreeitemNot} />
                            <TreeItem nodeId="8" label={<div className={styles.TreeitemForn}  >{t('00971-50-1514410')}</div>} className={styles.TreeitemNot} />
                        </TreeItem>
                    </TreeView>
                    <br />
                    <TreeView className={styles.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMore />}
                        defaultExpandIcon={<ChevronRight className={styles.iconTreeMob} />}
                        expanded={expanded}
                        onNodeToggle={handleToggle}
                    >
                        <TreeItem
                            nodeId="node2" label={<div className={styles.label} > {t('Terms')}</div>} >
                            <TreeItem nodeId="22" label={<div className={styles.TreeitemForn}  >{t('Know_your_rights')}</div>} className={styles.Treeitem} style={{
                                marginTop: "15px",
                            }} />
                            <TreeItem nodeId="33" label={<div className={styles.TreeitemForn}  >{t('Fees_And_Payments')}</div>} className={styles.Treeitem} />
                            <TreeItem nodeId="44" label={<div className={styles.TreeitemForn}  >{t('Publishing_Content')}</div>} className={styles.Treeitem} />
                        </TreeItem>
                    </TreeView>
                    <br />
                    <TreeView className={styles.TreeView}
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMore />}
                        defaultExpandIcon={<ChevronRight className={styles.iconTreeMob} />}
                        expanded={expanded}
                        onNodeToggle={handleToggle}
                    >
                        <TreeItem nodeId="node3" label={<div className={styles.label} > {t('Legal')}</div>} >
                            <TreeItem nodeId="222" label={<div className={styles.TreeitemForn}  >{t('Privacy_policy')}</div>} className={styles.Treeitem} style={{
                                marginTop: "15px"
                            }} />
                            <TreeItem nodeId="333" label={<div className={styles.TreeitemForn}  >{t('Terms_Conditions')}</div>} className={styles.Treeitem} />
                        </TreeItem>
                    </TreeView>
                </div>
            </div>
            <div className={styles.socialMediaWrapper}>
                <div className={styles.socialMediaIconWrapper}>
                    <Twitter className={styles.socialMediaIcon} />
                </div>
                <div className={styles.socialMediaIconWrapper}>
                    <LinkedIn className={styles.socialMediaIcon} />
                </div >
                <div className={styles.socialMediaIconWrapper}>
                    <Instagram className={styles.socialMediaIcon} />
                </div>
                <div className={styles.socialMediaIconWrapper}>
                    <Facebook className={styles.socialMediaIcon} />
                </div>
            </div>
            <div>
                <div className={styles.bottomBarr}>
                    <div className={styles.creditCardsWraper}>
                        <div className={styles.creditCardsIconWraper}>
                            <img alt='payoneer' src={payoneer} className={styles.creditCardsIcon} />
                        </div>
                        <div className={styles.creditCardsIconWraper}>
                            <img alt='visa' src={visa} className={styles.creditCardsIcon} />
                        </div>
                        <div className={styles.creditCardsIconWraper}>
                            <img alt='mastercard' src={mastercard} className={styles.creditCardsIcon} />
                        </div>
                        <div className={styles.creditCardsIconWraper}>
                            <img alt='paypal' src={paypal} className={styles.creditCardsIcon} />
                        </div>
                    </div>
                    <div className={styles.grow} />
                    <div className={styles.forlansoLogo}>
                        © 2020 Forlanso
                    </div>
                </div>
            </div>
        </div >
    );
}
