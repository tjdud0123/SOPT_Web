import React from 'react';

function SearchResult({ user }) {
  return <div>{user && user.name}</div>;
}

export default SearchResult;
