import { Link } from 'react-router-dom';
import React from 'react';
import styles from './List.css';

export default function List({ selected, select }) {
  return (
    <div className={styles.list}>
      {selected.map(({ id, name, image }) => (
        <div key={id} className={styles.link}>
          <Link to={`/${select}/${id}`}>
            {image && (
              <img src={image} className={styles.list_image} alt={name} />
            )}
            {!image && (
              <img
                src={
                  'https://townsquare.media/site/518/files/2017/01/bobs-burgers.jpg?w=980&q=75'
                }
                className={styles.list_image}
                alt={'bobs burgers restaurant'}
              />
            )}
            <p>{name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
