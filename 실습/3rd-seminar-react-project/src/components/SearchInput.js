import React from 'react';
import { useState } from 'react';
function SearchInput({ onSubmit }) {
  console.log(onSubmit);
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="깃헙 아이디를 입력하세요"
        value={input}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchInput;
