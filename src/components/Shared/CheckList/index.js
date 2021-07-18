import React from 'react'
//mui
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';
// mui
import styles from './checkList.module.scss'
const BayerFreelancer = ({ items }) => {
    const { t } = useTranslation();
    //styling
    return (<>
            {items && items.map((item, i) =>
                <ListItem key={i + "item"} className={styles.ListItem}>
                    <ListItemAvatar>
                        <Avatar style={{ background: "transparent" }}>
                            <CheckCircleIcon style={{ fill: "#65c042",marginTop:"-5px" }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<div className={styles.featuresText}>{t(item)}</div>}
                    />
                </ListItem>
            )}
        </>
    )
}
export default BayerFreelancer
