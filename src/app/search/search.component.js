import React, { useEffect, useState } from 'react';
import './search.css';
import useDebounce from '../../hooks/useDebounce.hook';
import useLocalStorage from '../../hooks/useLocalStorage.hook';
import searchAnime from './searchAnime';
import AnimeContainerComponent from '../anime/animeContainer.component';
import useDidMount from '../../hooks/useDidMount.hook';

const SearchComponent = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [priorityResults, setPriorityResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [resultsHistory, setResultsHistory] = useState([]);

  const [history, setHistory] = useLocalStorage('history');

  const debouncedValue = useDebounce(searchInput, 900);

  const didMount = useDidMount();

  useEffect(() => {
    if (didMount()) {
      setResultsHistory(JSON.parse(history));
    }

    if (debouncedValue && debouncedValue.length > 2) {
      setIsSearching(true);

      if (
        searchHistory.find((anime) =>
          anime.toLowerCase().includes(debouncedValue.toLowerCase())
        )
      ) {
        setPriorityResults(
          resultsHistory.filter((anime) =>
            anime.title.toLowerCase().includes(debouncedValue.toLowerCase())
          )
        );
      } else {
        setPriorityResults([]);
      }

      searchAnime(debouncedValue).then((searchResults) => {
        setIsSearching(false);
        setResults(searchResults);
      });
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (resultsHistory) {
      setHistory(JSON.stringify(resultsHistory));
      setSearchHistory(resultsHistory.map((result) => result.title));
    }
  }, [resultsHistory]);

  const saveSearch = (event, anime) => {
    if (event.key === 'Enter' || event.key === undefined) {
      event.stopPropagation();

      if (!resultsHistory.includes(anime)) {
        setResultsHistory([anime, ...resultsHistory]);
      }
    }
  };

  const removeFromHistory = (event, anime) => {
    if (event.key === 'Enter' || event.key === undefined) {
      event.stopPropagation();

      setResultsHistory(
        resultsHistory.filter(
          (filteredResult) => filteredResult.mal_id !== anime.mal_id
        )
      );
    }
  };

  return (
    <div>
      <div className="Search-container">
        <input
          aria-label="Поисковое поле"
          placeholder={`Введите запрос, например, ${
            searchHistory[0] || 'pupa'
          } `}
          className="Search"
          onChange={(event) => setSearchInput(event.target.value)}
          minLength="3"
        />

        {isSearching && <div>Поиск...</div>}

        {!isSearching && results.length === 0 && searchInput && (
          <div>По вашему запросу, похоже, ничего не найдено :(</div>
        )}
      </div>

      {priorityResults.length !== 0 && searchInput && (
        <div className="Search-history">
          <h5 className="Search-lastSearch">Из истории запросов</h5>
          <AnimeContainerComponent anime={priorityResults.slice(0, 5)} />
        </div>
      )}

      {results && searchInput && (
        <AnimeContainerComponent anime={results} action={saveSearch} />
      )}

      {resultsHistory && resultsHistory.length > 0 && (
        <>
          <h2 className="Search-lastSearch">История запросов</h2>
          <AnimeContainerComponent
            anime={resultsHistory.slice(0, 5)}
            action={removeFromHistory}
            history="history"
          />
        </>
      )}
    </div>
  );
};

export default SearchComponent;
