import React, { useState, useEffect } from 'react';
import Modal from '../../modal/ui/Modal'; 
import CloseBig from '@/shared/assets/images/icons/CloseBig';
import styles from './SubtaskHead.module.scss'; 

const SubtaskHead = ({ layout, onOpenModal, onCloseModal, isModalOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const handleCancel = () => {
    console.log('test head');
    onCloseModal(); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [isMobileSmall, setIsMobileSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767); 
      setIsMobileSmall(width <= 320); 
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div
        className={`${layout === 'modal' ? styles.subtask__headModal : styles.subtask__head} ${isSticky ? styles.sticky : ''}`}
      >
        <div className={styles['subtask__head-left']}>
          <h2 className="title-2">Подзадача</h2>
          {layout !== 'modal' && (
            <button
              className={styles['subtask__button-create']}
              onClick={onOpenModal}
            >
              Создать
            </button>
          )}
        </div>
        <div className={styles['subtask__head-right']}>
          {layout === 'modal' ? (
            <>
              {!isMobileSmall && (
                <>
                  <button className={styles['subtask__button-save']}>
                    Сохранить
                  </button>
                  <button
                    className={styles['subtask__button-cancel']}
                    onClick={() => {
                      handleCancel();
                    }}
                  >
                    Отменить
                  </button>
                </>
              )}
              {isMobileSmall&&(
                <button className={styles.btn__close}
                onClick={() => {
                  handleCancel();
                }}
                >
                  <CloseBig />
                </button>
              )}
            </>
          ) : (
            <>
            </>
          )}

        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={onCloseModal} />
      )}
    </>
  );
};

export default SubtaskHead;
