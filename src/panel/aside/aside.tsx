import React from 'react';
import styles from './aside.module.css';
import Icon from '../../components/icon/icon';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <span className={styles.button}>
        <Icon name='new' viewBox='0 0 30 30' />
        New Note
      </span>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a
              href='#'
              className={`${styles.nav__item} ${styles.nav__item_active}`}
            >
              <Icon name='folder' viewBox='0 0 30 30' />
              <div className={styles.nav__title}>All Notes</div>
              <span className={styles.nav__counter}>43</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav__item}>
              <Icon name='folder' viewBox='0 0 30 30' />
              <div className={styles.nav__title}>Design</div>
              <span className={styles.nav__counter}>23</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav__item}>
              <Icon name='folder' viewBox='0 0 30 30' />
              <div className={styles.nav__title}>Code Blocks</div>
              <span className={styles.nav__counter}>15</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav__item}>
              <Icon name='folder' viewBox='0 0 30 30' />
              <div className={styles.nav__title}>Drafts</div>
              <span className={styles.nav__counter}>18</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav__item}>
              <Icon name='folder' viewBox='0 0 30 30' />
              <div className={styles.nav__title}>Peoples Review</div>
              <span className={styles.nav__counter}>21</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav__item}>
              <Icon name='folder' viewBox='0 0 30 30' />
              <div className={styles.nav__title}>Social</div>
              <span className={styles.nav__counter}>43</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav__item}>
              <Icon name='folder' viewBox='0 0 30 30' />
              <div className={styles.nav__title}>Labels</div>
              <span className={styles.nav__counter}>36</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav__item}>
              <Icon name='folder' viewBox='0 0 30 30' />
              <div className={styles.nav__title}>My Notes</div>
              <span className={styles.nav__counter}>29</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className={`${styles.nav__item} ${styles.nav__item_add}`}
            >
              <Icon name='add' viewBox='0 0 30 30' />
              <div className={styles.nav__title}>Add Folder</div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
