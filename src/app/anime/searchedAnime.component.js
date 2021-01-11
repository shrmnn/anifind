import React from 'react';

const SearchedAnimeComponent = (prop) => {
  const { malId, imageUrl, title } = prop;
  return (
    <div key={malId} className="Anime-item">
      <img alt="Обложка тайтла" src={imageUrl} className="Anime-img" />
      <p className="Anime-title">{title}</p>
    </div>
  );
};

export default React.memo(SearchedAnimeComponent);
