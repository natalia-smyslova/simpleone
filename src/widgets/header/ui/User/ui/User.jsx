import React, { useState, useEffect } from 'react';
import avatar from '@/shared/assets/images/avatar.jpg'
import Settings from '@/shared/assets/images/icons/Settings';
import styles from './User.module.scss';

function User() {

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
    <div className={styles.user}>
      <img
        src={avatar}
        alt="User avatar"
        className={styles.avatar}
      />
      {!isMobile && (
        <div className={styles.user__name}>Максим Галактионов</div>
      )}
      <button className={styles.user__button}>
        <Settings />
      </button>
    </div>
  )
}

export default User