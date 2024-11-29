import React from 'react';
import Star from '@/shared/assets/images/icons/Star.jsx';
import SidebarMenu from '@/shared/assets/images/icons/SidebarMenu.jsx';
import '@/shared/assets/images/icons/icons.scss';
import styles from './NavButtons.module.scss';

function NavButtons() {
    const handleClick = (iconName) => {
        console.log(`Clicked on ${iconName}`);
    };

    return (
        <div className={styles.nav__buttons}>

            <button className={styles.sidebar__icon} onClick={() => handleClick('sidebar')}>
            <SidebarMenu />
            </button>

            <button className={styles.sidebar__icon} onClick={() => handleClick('star')} >
            <Star />
            </button>
        </div>
    );
}

export default NavButtons;
