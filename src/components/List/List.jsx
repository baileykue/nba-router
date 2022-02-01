import React from 'react';
import { Link } from 'react-router-dom';

export default function List({ selected, select }) {
  return (
    <div>
      {selected.map(({ id, name, image }) => (
        <div key={id}>
          <Link to={`/${select}/${id}`}>
            {image && <img src={image} />}
            <p>{name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
