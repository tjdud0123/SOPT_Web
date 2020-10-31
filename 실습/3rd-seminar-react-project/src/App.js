import './App.css';
import React, { Fragment } from 'react'; // 최상위 부모를 만들고 싶지 않을 때
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import { getUserAPI } from './lib/api';

import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const getUser = async userName => {
    const data = await getUserAPI(userName);
    setUser(data);
  };

  // useEffect(() => {
  //   getUser('tjdud0123');
  // }, []);

  return (
    <>
      <SearchInput onSubmit={getUser} />
      <SearchResult user={user} />
    </>
  );
}

export default App;
