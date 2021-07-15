import React from 'react'
import { useTranslation } from 'react-i18next';
// mui
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
import classes from './TopSection.module.scss'

const TopSection = () => {
    const { t } = useTranslation();
    return (
        <section>
            <div className={classes.body_header_section} >
                <div className={classes.body_header_section_img_wrapper}>
                    <div className={classes.body_header_section_img} alt='best-services' />
                </div>
                <div className={classes.text_wraper} >
                    <div className={classes.text_wraper_title}   >
                        {t('bestFrellancer')}
                    </div>
                    <div className={classes.text_wraper_description} >
                        {t('ForlansoDesc')}
                    </div>
                    <InputLabel htmlFor="search" className={classes.Inputlabel}  >
                        {t('try')}
                    </InputLabel>
                    <div className={classes.search}>
                        <form>
                            <InputBase
                                autoComplete='off'
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
                        </form>
                        <Chip className={classes.chip} label={t('translation')} />
                        <Chip className={classes.chip} label={t('logodesign')} />
                        <Chip className={classes.chip} label={t('webdesign')} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopSection
