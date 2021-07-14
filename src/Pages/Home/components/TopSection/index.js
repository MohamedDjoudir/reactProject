import React from 'react'
import { useTranslation } from 'react-i18next';
// mui
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
 import {useStyles} from './style'

const TopSection = () => {
    const { t, i18n } = useTranslation();    
    const classes = useStyles()();
    return (
        <section>
            <div className="body-header-section" >
                <div className='body-header-section-img-wrapper'>
                    <div className='body-header-section-img' alt='best-services' />
                </div>
                <div className="text-wraper">
                    <div className="text-wraper-title" style={{ fontFamily: i18n.language !== 'ar' ? "'DM Sans', sans-serif" : '"Almarai", sans-serif' }}>
                        {t('bestFrellancer')}
                    </div>
                    <div className="text-wraper-description" style={{
                        fontFamily: i18n.language !== 'ar' ? "'Roboto', sans-serif" : '"Cairo", sans-serif',
                        lineHeight: i18n.language !== 'ar' ? "27px" : '35px',
                        fontWeight: "400"
                    }}>
                        {t('ForlansoDesc')}
                    </div>
                    <InputLabel htmlFor="search" style={{
                        color: "#ffffde", fontFamily: '"Almarai", sans-serif', margin: "7px 0", fontSize: "14px"
                    }}>
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
