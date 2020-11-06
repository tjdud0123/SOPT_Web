import React from 'react';

function SearchResult({ user }) {
  return (
    user && (
      <div>
        <img src={user.avatar_url} alt={user.name} />
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <ul>
            <li>
              <strong>Followers</strong> {user.followers}
            </li>
            <li>
              <strong>Following</strong> {user.following}
            </li>
            <li>
              <strong>Repos</strong> {user.public_repos}
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

export default SearchResult;
