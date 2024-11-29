import React, { useState, useEffect } from 'react';
import Logo from './Logo/ui/Logo';
import { SearchInput } from '@/features/search/index';
import User from './User/ui/User';
import SidebarMenu from '@/shared/assets/images/icons/SidebarMenu';
import styles from './index.module.scss'

function Header() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); 
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (iconName) => {
    console.log(`Clicked on ${iconName}`);
  };

  return (
    <header className={styles.header}>
      {!isMobile && (
        <Logo />
      )}
      {isMobile && (
        <button onClick={() => handleClick('sidebar')}>
          <SidebarMenu />
        </button>
      )}
      <div className={styles.header__right}>
        {!isMobile && (
          <SearchInput />
        )}
        <User />
      </div>
    </header>
  )
}

export default Header
