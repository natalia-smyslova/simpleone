import React, { useState } from 'react';
import SubtaskHead from './SubtaskHead/ui/SubtaskHead';
import SubtaskForm from './SubtaskForm/ui/SubtaskForm';
import Modal from './modal/ui/Modal'; 
import styles from './Subtask.module.scss';

const Subtask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; 
  }

  return (
    <>
      <div className={styles.subtask__wrapper}>

        <SubtaskHead 
        layout="page" 
        onOpenModal={openModal} 
        onCloseModal={closeModal} 
        isModalOpen={isModalOpen} 
        />

        <SubtaskForm 
        layout="page" 
        onCloseModal={closeModal} 
        />
      </div>

      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default Subtask;
