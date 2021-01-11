import React from 'react';
import './anime.css';
import SearchedAnimeComponent from './searchedAnime.component';

const AnimeContainerComponent = (prop) => {
  const { anime } = prop;
  let animeList = [];

  try {
    animeList = anime.map((result) => (
      <li key={`li_${result.mal_id || ''}`}>
        <SearchedAnimeComponent
          malId={result.mal_id || ''}
          imageUrl={result.image_url || ''}
          title={result.title || ''}
        />
      </li>
    ));
  } catch (error) {
    console.error(error);
    return null;
  }

  return <ul className="Anime">{animeList}</ul>;
};

export default React.memo(AnimeContainerComponent);
