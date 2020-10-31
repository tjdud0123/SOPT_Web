import React from 'react';

function SearchResult({ user }) {
  //console.log(user);
  return <div>{user && user.name}</div>;
}

export default SearchResult;
