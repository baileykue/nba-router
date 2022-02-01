import React from 'react';

export default function Detail({ selected }) {
  const {
    id,
    image,
    name,
    gender,
    firstEpisode,
    hairColor,
    occupation,
    season,
    episode,
    airDate,
    totalViewers,
    productionCode,
  } = selected;

  return (
    <div>
      <h1>{name}</h1>
      {image && <img src={image} />}

      {/* store next door */}
      {image && season && (
        <p>
          Appeared in season {season}, episode {id}.
        </p>
      )}

      {/* episodes */}
      {productionCode && (
        <p>
          Appeared in season {season}, episode {episode}.
        </p>
      )}
      {airDate && (
        <p>
          This episode first aired on {airDate}, and had {totalViewers} viewers.
        </p>
      )}

      {/* characters */}
      {firstEpisode && (
        <p>
          {name} first appeared in the {firstEpisode} episode.
        </p>
      )}
      {hairColor && (
        <p>
          They identify as {gender}, and have {hairColor} hair.
        </p>
      )}
      {occupation && <p>They are a/an {occupation}.</p>}
    </div>
  );
}
