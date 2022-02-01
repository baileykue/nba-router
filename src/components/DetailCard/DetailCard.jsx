import React from 'react';

export default function Detail({ selected, select }) {
  const { image, name, firstEpisode, hairColor, occupation } = selected;
  console.log(selected);
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
      {firstEpisode && (
        <p>
          {name} first appeared in the {firstEpisode} episode
        </p>
      )}
      {hairColor && <p>Has {hairColor} hair</p>}
      {occupation && <p>{occupation}</p>}
    </div>
  );
}
