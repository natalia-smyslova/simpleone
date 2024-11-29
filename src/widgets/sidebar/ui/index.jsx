import React, { useState, useEffect } from 'react';
import SidebarList from './SidebarList/ui/SidebarList';
import NavButtons from './NavButtons/ui/NavButtons';
import Filter from './Filter/ui/Filter';
import styles from './index.module.scss';

function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); 
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.sidebar}>
      <NavButtons />
      {!isMobile && (
        <div className={styles.sidebar__wrapper}>
          <Filter />
          <SidebarList />
        </div>
      )}
    </nav>
  );
}

export default Sidebar
