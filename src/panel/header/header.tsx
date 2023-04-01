import React from 'react';
import styles from './header.module.css';
import Icon from '../../components/icon/icon';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='inner'>
        <div className={styles.wrapper}>
          Figma-Tokens
          <div className={styles.actions}>
            <span className={styles.icon}>
              <Icon name='search' viewBox='0 0 30 30' />
            </span>
            <span className={styles.icon}>
              <Icon name='notifications' viewBox='0 0 30 30' />
            </span>
            <span className={styles.icon}>
              <Icon name='exit' viewBox='0 0 30 30' />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
