import React, { useEffect, useState } from 'react';
import './search.css';
import useDebounce from '../../hooks/useDebounce.hook';
import useLocalStorage from '../../hooks/useLocalStorage.hook';
import searchAnime from './searchAnime';
import AnimeContainerComponent from '../anime/animeContainer.component';
import useDidMount from '../../hooks/useDidMount.hook';

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [pastResults, setPastResults] = useState([]);

  const [history, setHistory] = useLocalStorage('history');

  const debouncedValue = useDebounce(searchInput, 1000);

  const didMount = useDidMount();

  useEffect(() => {
    if (debouncedValue && debouncedValue.length > 2) {
      setIsSearching(true);

      if (results.length > 0) {
        setPastResults(results || []);
      }

      searchAnime(debouncedValue).then((searchResults) => {
        setSearchHistory([debouncedValue, ...searchHistory]);
        setHistory(debouncedValue);
        setIsSearching(false);
        setResults(searchResults);
      });
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (pastResults.length === 0 && didMount()) {
      searchAnime(history).then((searchResults) => {
        setPastResults(searchResults);
      });
    }

    if (
      history !== debouncedValue &&
      history !== searchHistory[0] &&
      results !== pastResults
    ) {
      setSearchInput(history);
    }
  }, [history]);

  return (
    <div>
      <div className="Search-container">
        <input
          aria-label="Поисковое поле"
          placeholder={`Введите запрос, например, ${history || 'pupa'}`}
          className="Search"
          onChange={(event) => setSearchInput(event.target.value)}
        />

        <div className="Search-history">
          <div>Последние запросы:</div>
          <ol>
            {searchHistory.slice(0, 3).map((element, index) => (
              <li key={`${Math.random() * index}_${element}`}>{element}</li>
            ))}
          </ol>
        </div>
      </div>

      {isSearching && <div>Поиск...</div>}

      {results && !isSearching && <AnimeContainerComponent anime={results} />}

      {results.length === 0 && !isSearching && (
        <div>По вашему запросу, похоже, ничего не найдено :(</div>
      )}

      {pastResults && (
        <>
          <h2 className="Search-lastSearch">
            Последний {results.length === 0 && 'рабочий'} поиск
          </h2>
          <AnimeContainerComponent anime={pastResults} />
        </>
      )}
    </div>
  );
};

export default SearchComponent;
