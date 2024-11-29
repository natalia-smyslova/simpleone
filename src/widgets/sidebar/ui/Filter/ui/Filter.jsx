import React from 'react';
import Pin from '@/shared/assets/images/icons/Pin';
import styles from './Filter.module.scss';

function Filter() {

    return (
        <div className={styles.filter}>
            <div className={styles.filter__wrapper}>
                <input
                    type="text"
                    className={styles.filter__input}
                    placeholder="Поиск по меню"
                />
                <span className={styles.filter__icon}></span>
            </div>
            <button className={styles.pin__btn}>
                <Pin />
            </button>
        </div>
    );
}

export default Filter;