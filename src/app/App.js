import React from 'react';
import './App.css';
import SearchComponent from './search/search.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a aria-label="Заголовок" className="App-header__logo" href="/anifind/">
          anifind
        </a>
      </header>
      <main className="App-main">
        <SearchComponent />
      </main>
    </div>
  );
}

export default App;
