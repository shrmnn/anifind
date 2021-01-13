import React from 'react';

const SearchedAnimeComponent = (prop) => {
  const { anime, action, history } = prop;

  return (
    <div
      key={anime.mal_id || ''}
      className={`Anime-item ${history}`}
      onClick={(event) => action(event, anime) || null}
      onKeyDown={(event) => action(event, anime) || null}
      role="button"
      tabIndex={0}
      title={
        history ? 'Нажмите, чтобы удалить' : 'Нажмите, чтобы добавить в список'
      }
    >
      <img
        alt="Обложка тайтла"
        src={anime.image_url || ''}
        className="Anime-img"
      />
      <p className="Anime-title">{anime.title || ''}</p>
    </div>
  );
};

export default React.memo(SearchedAnimeComponent);
