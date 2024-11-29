import React, { useState, useEffect } from 'react';
import SubtaskHead from '../../SubtaskHead/ui/SubtaskHead';
import SubtaskForm from '../../SubtaskForm/ui/SubtaskForm';
import styles from './Modal.module.scss';

const Modal = ({ onClose }) => {

  const handleCancel = () => {
    if (onClose) onClose();
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCancel();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 320);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div className={styles.modal__backdrop} onClick={handleBackdropClick}>
        <div className={styles.modal}>
          <SubtaskHead layout="modal" onCloseModal={onClose} />
          <SubtaskForm layout="modal" onCloseModal={onClose} />
          {isMobile && (
            <div className={styles['subtask__button-wrapper']}>
              <button className={styles['subtask__button-save']}>
                Сохранить
              </button>
              <button
                className={styles['subtask__button-cancel']}
                onClick={handleCancel}
              >
                Отменить
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
