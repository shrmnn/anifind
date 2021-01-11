import React from 'react';
import './App.css';
import SearchComponent from './search/search.component';

function App() {
  return (
    <div className="App">
      <header className="App-header" title="Кликать бесполезно">
        <div aria-label="Заголовок" className="App-header__logo">
          anifind
        </div>
      </header>
      <main className="App-main">
        <SearchComponent />
      </main>
    </div>
  );
}

export default App;
