import React from 'react'
import OutlinedBTN from '../../../../components/Shared/Outlined_BTN'
import CheckList from '../../../../components/Shared/CheckList'
//mui
import { useTranslation } from 'react-i18next';
// mui
import styles from './Features.module.scss'
const BayerFreelancer = ({ categories }) => {
    const { t } = useTranslation();
    //styling
    const items1 = ["dedicated", "payment", "get_maximum_value", "work_with_your_budget"]
    const items2 = ["three_month_commission", "three_month_no_money", "mission_you_choose_from",]
    return (
        <>
            <div className={styles.bayerFreelancerWrapper2}>
                <div className={styles.bayerFreelancerWrapper} >
                    {/* bayer */}
                    <div >
                        <div className={styles.features}>
                            <CheckList items={items1} />
                        </div>
                        <OutlinedBTN textID={'join_us_a_buyer'} />
                    </div>
                    {/* image */}
                    <div className={styles.sign_up_like_freelanser_imgWrapper}>
                        <img src='https://www.forlanso.com/why-forlanso.jpeg' alt="sign_up_like_freelanser" className={styles.sign_up_like_freelanser} />
                    </div>
                    {/* freelancer */}
                    <div>
                        <div className={styles.features}>
                            <CheckList items={items2} />
                        </div>
                        <OutlinedBTN textID={'join_us_a_freelancer'} />
                    </div >
                </div>
            </div>
        </>
    )
}
export default BayerFreelancer
