import React from 'react';
import { useState } from 'react';
import '../App.scss';
function SearchInput({ getUser }) {
  // console.log(getUser); 함수를 넘겨받음 - 부모 컴포넌트 함수 실행

  const [input, setInput] = useState(''); //input 값 조작

  // 인풋값 변할 때 onchange 이벤트로 값 가져와서 set해줌
  const handleChange = e => {
    setInput(e.target.value);
  };

  // onSubmit 이벤트 발생시 form 태그 속성 막고 API 호출
  const handleSubmit = e => {
    e.preventDefault();
    getUser(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="&#128269; 깃헙 아이디를 입력하세요"
        value={input}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchInput;
