import React from 'react'
//import Spiner from "../../assets/logo/spiner.svg"
import Spiner2 from "../../assets/logo/spiner2.svg"
import styles from './Loader.module.scss'
const Loader = () => {
    return (
        <div className={styles.LoaderWrapper} >
            {/* <img src={Spiner} alt="" className={styles.LoaderIcon} /> */}
            <img src={Spiner2} alt="" className={styles.LoaderIcon2} />
        </div>
    )
}

export default Loader
