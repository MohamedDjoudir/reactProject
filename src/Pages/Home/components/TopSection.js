import React from 'react'
import { useTranslation } from 'react-i18next';
// mui
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
const TopSection = () => {
    const { t, i18n } = useTranslation();
    //styling
    const useStyles = makeStyles(theme => ({
        inputFocused: {
            border: "1px solid #65c042 "
        },
        inputRoot: {
            color: '#4d4d4f',
            width: '100%',
            lineHeight: "38px",
            minHeight: "50px",
            maxHeight: "66px",
            fontFamily: "'Almarai',sans-serif",
            padding: i18n.language === 'ar' ? "0 15px 0 0" : "0 0 0 15px",
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },
        },
        inputInput: {
            // vertical padding + font size from searchIcon
            width: '100%',
            "&::placeholder": {
                lineHeight: "38px",
            }
        },
        search: {
            position: 'relative',
            backgroundColor: "#ffff",
            borderRadius: "2px",
            padding: "0",
            height: "66px",
            minHeight: "50px",
            width: '100%',
            '&:hover': {
                backgroundColor: "#eeee",
            },
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },
        },
        search_icon: {
            background: "#65c042",
            height: "66px",
            zIndex: "6544",
            minHeight: "50px",
            width: "66px",
            minWidth: "50px",
            maxHeight: "66px",
            margin: "0",
            justifyContent: "center",
            "&:focus": {
                background: "red !important",
            },
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },
        },
        chip: {
            fontFamily: "'Almarai',sans-serif",
            margin: "15px 10px",
            [theme.breakpoints.down('sm')]: {
                display: "none",
            },
        },
    }))
    const classes = useStyles();
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
