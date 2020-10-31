import './App.css';
import React, { Fragment } from 'react'; // 최상위 부모를 만들고 싶지 않을 때
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <>
      <SearchInput />
      <SearchResult />
    </>
  );
}

export default App;
