import React from 'react';
import styles from './article.module.css';
import Icon from '../../components/icon/icon';
import img_01 from '../../static/images/01.png';
import img_02 from '../../static/images/02.png';
import img_03 from '../../static/images/03.png';
import img_04 from '../../static/images/04.png';
import img_05 from '../../static/images/05.png';
import img_06 from '../../static/images/06.png';
import img_07 from '../../static/images/07.png';
import img_08 from '../../static/images/08.png';
import img_09 from '../../static/images/09.png';
import img_10 from '../../static/images/10.png';
import img_11 from '../../static/images/11.png';
import img_12 from '../../static/images/12.png';
import img_13 from '../../static/images/13.png';
import img_14 from '../../static/images/14.png';
import img_15 from '../../static/images/15.png';
import img_16 from '../../static/images/16.png';

const Article = () => {
  return (
    <article className={styles.article}>
      <div className={styles.filter}>
        <span className={styles.icon}>
          <Icon name='sort_table' viewBox='0 0 30px 30px' />
        </span>
        <span className={styles.icon}>
          <Icon name='sort_list' viewBox='0 0 30px 30px' />
        </span>
        <span className={styles.delete}>
          <Icon name='delete' viewBox='0 0 30px 30px' />
        </span>
        <div className={styles.search}>
          <Icon name='search' viewBox='0 0 30 30' />
          <input className={styles.input} placeholder='Search' />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_01} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_02} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_03} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_04} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_05} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_06} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_07} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_08} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_09} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_10} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_11} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_12} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_13} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_14} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_15} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
        <div className={styles.content__item}>
          <div className={styles.image}>
            <img src={img_16} alt='title' />
          </div>
          <div className={styles.title}>Shooting Stars</div>
          Shooting Stars
        </div>
      </div>
    </article>
  );
};

export default Article;
