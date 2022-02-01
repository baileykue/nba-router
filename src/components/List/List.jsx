import { Link } from 'react-router-dom';
import React from 'react';
import styles from './List.css';

export default function List({ selected, select }) {
  return (
    <div className={styles.list}>
      {selected.map(({ id, name, image }) => (
        <div key={id} className={styles.link}>
          <Link to={`/${select}/${id}`}>
            {image && <img src={image} className={styles.list_image} />}
            <p>{name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
