import React, { useState } from 'react';
import Search from '@/shared/assets/images/icons/Search';
import styles from './Search.module.scss'; 

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.search}>
      <div className="input-container">
        <input
          type="text"
          className={styles.search_input}
          placeholder="Поиск"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress} 
        />
        <div className="input-icon">
          <Search />
        </div>
      </div>
      <span className={styles.search__icon}></span>
      <button
        type="button"
        className={styles.search_icon}
        onClick={handleSearch} 
      >
      </button>
    </div>
  );
}

export default SearchInput;
