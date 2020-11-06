import './App.css';
import React from 'react';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import { getUserAPI } from './lib/api';

import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const getUser = async userName => {
    const data = await getUserAPI(userName);
    setUser(data);
  };

  return (
    <>
      <SearchInput getUser={getUser} />
      <SearchResult user={user} />
    </>
  );
}

export default App;
