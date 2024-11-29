import React from 'react';
import styles from './SidebarList.module.scss'; 

function SidebarList() {
  return (
    <>
    <ul className={styles.nav_list}>
      <li className={styles.nav_list_item}>Моя работа</li>
      <li className={styles.nav_list_item}>Структура портала</li>
      <li className={styles.nav_list_item}>Личное расписание</li>
      <li className={styles.nav_list_item}>Отсутствие на рабочем месте</li>
      <li className={styles.nav_list_item}>Портфель услуг</li>
      <li className={styles.nav_list_item}>Дашборды</li>
      <li className={styles.nav_list_item}>Доски задач</li>
      <li className={styles.nav_list_item}>Обращения</li>
      <li className={styles.nav_list_item}>События</li>
      <li className={styles.nav_list_item}>Инциденты</li>
      <li className={styles.nav_list_item}>Проблемы</li>
      <li className={styles.nav_list_item}>Настройка каталогов</li>
      <li className={styles.nav_list_item}>Запросы на обслуживание</li>
      <li className={styles.nav_list_item}>Запросы на изменение</li>
      <li className={styles.nav_list_item}>Управление конфигурациями</li>
      <li className={styles.nav_list_item}>Управление уровнем услуг</li>
      <li className={styles.nav_list_item}>Настройка соответствий</li>
    </ul>
    </>
  );
}

export default SidebarList;
