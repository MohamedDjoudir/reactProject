import React from 'react'
import { useTranslation } from 'react-i18next';
// mui
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
import styles from './TopSection.module.scss'

const TopSection = () => {
    const { t } = useTranslation();
    return (
        <section>
            <div className={styles.body_header_section} >
                <div className={styles.body_header_section_img_wrapper}>
                    <div className={styles.body_header_section_img} alt='best-services' />
                </div>
                <div className={styles.text_wraper} >
                    <div className={styles.text_wraper_title}   >
                        {t('bestFrellancer')}
                    </div>
                    <div className={styles.text_wraper_description} >
                        {t('ForlansoDesc')}
                    </div>
                    <InputLabel htmlFor="search" className={styles.Inputlabel}  >
                        {t('try')}
                    </InputLabel>
                    <div className={styles.search}>
                        <form>
                            <InputBase
                                autoComplete='off'
                                id="search"
                                placeholder={t('searchPlaceHolder')}
                                endAdornment={
                                    <InputAdornment position="start" className={styles.search_icon}>
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                classes={{
                                    root: styles.inputRoot,
                                    input: styles.inputInput,
                                    focused: styles.inputFocused
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </form>
                        <Chip className={styles.chip} label={t('translation')} />
                        <Chip className={styles.chip} label={t('logodesign')} />
                        <Chip className={styles.chip} label={t('webdesign')} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopSection
