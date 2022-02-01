import React from 'react';
import styles from './DetailCard.css';

export default function Detail({ selected, select, handleClick }) {
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
    <div className={styles.card}>
      <div className={styles.detail_header}>
        <h1>{name}</h1>
        {image && <img src={image} className={styles.detail_image} />}
        {!image && (
          <img
            src={
              'https://townsquare.media/site/518/files/2017/01/bobs-burgers.jpg?w=980&q=75'
            }
            className={styles.detail_image}
          />
        )}
      </div>

      <div className={styles.detail_desc}>
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
            This episode first aired on {airDate}, and had {totalViewers}{' '}
            viewers.
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

        <button onClick={handleClick} className={styles.back_button}>
          Back to {select}
        </button>
      </div>
    </div>
  );
}
