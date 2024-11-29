import React, { useState, useEffect } from 'react';
import Header from '@/widgets/header/ui/index';
import Sidebar from '../widgets/sidebar/ui';
import styles from './BaseLayout.module.scss';

function BaseLayout({ children }) {
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

  return (
    <>
      <div>
        <Header />
        <div className={styles.layout__wrapper}>
          {!isMobile && (
            <Sidebar />
          )}
          {children}
        </div>
      </div>
    </>
  )
}

export default BaseLayout
