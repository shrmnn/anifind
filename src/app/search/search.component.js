import React, { useEffect, useState } from 'react';
import './search.css';
import useDebounce from '../../hooks/useDebounce.hook';
import useLocalStorage from '../../hooks/useLocalStorage.hook';
import searchAnime from './searchAnime';
import AnimeContainerComponent from '../anime/animeContainer.component';

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [history, setHistory] = useLocalStorage('history');
  const [pastResults, setPastResults] = useLocalStorage('pastResults');

  const debouncedValue = useDebounce(searchInput, 500);

  useEffect(() => {
    if (debouncedValue && debouncedValue.length > 2) {
      setIsSearching(true);

      if (results.length > 0) {
        setPastResults(results || []);
        setSearchHistory([debouncedValue, ...searchHistory]);
        console.log(pastResults, history, searchHistory);
      }

      searchAnime(debouncedValue).then((searchResults) => {
        setHistory(debouncedValue);
        setIsSearching(false);
        setResults(searchResults);
      });
    }
  }, [debouncedValue]);

  useEffect(() => {
    setSearchInput(history);
  }, [history]);

  return (
    <div>
      <div className="Search-container">
        <input
          aria-label="Поисковое поле"
          placeholder={`Введите запрос, например, ${history || 'Naruto'}`}
          className="Search"
          onChange={(event) => setSearchInput(event.target.value)}
        />

        <div className="Search-history">
          Последние запросы:
          <ul>
            {searchHistory.slice(0, 3).map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul>
        </div>
      </div>

      {isSearching && <div>Поиск {searchInput}...</div>}

      <AnimeContainerComponent anime={results} />

      {pastResults ? (
        <>
          <div>Прошлый поиск</div>
          <AnimeContainerComponent anime={pastResults} />
        </>
      ) : null}
    </div>
  );
};

export default SearchComponent;
