import React from 'react';

export default function List({ selected }) {
  return (
    <div>
      {selected.map(({ id, name, image }) => (
        <div key={id}>
          {image && <img src={image} />}
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}
