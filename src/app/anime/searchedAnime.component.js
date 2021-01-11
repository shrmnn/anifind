import React from 'react';

const SearchedAnimeComponent = (prop) => {
  const { malId, imageUrl, title } = prop;
  return (
    <div key={malId} className="Anime-item">
      <img alt="Обложка тайтла" src={imageUrl} className="Anime-img" />
      <h6 className="Anime-title">{title}</h6>
    </div>
  );
};

export default React.memo(SearchedAnimeComponent);
