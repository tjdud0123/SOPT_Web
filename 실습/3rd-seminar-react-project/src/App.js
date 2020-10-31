import './App.css';
import React, { Fragment } from 'react'; // 최상위 부모를 만들고 싶지 않을 때
import { useState, useEffect } from 'react';

function App() {
  const part = 'WEB';
  const showNum = num => num + 'th';
  const isLoading = false;
  const name = '엄서영';
  const old = 26;

  const blueTextAlign = {
    textAlign: 'center',
    color: 'blue',
  };

  useEffect(() => {
    // componentDidMount
    console.log('mounted');
    return () => {
      // componentWillUnmount
    };
  }, []); // 빈 값이면 최초 한번만 실행

  const MyName = ({ style, name, old }) => {
    return (
      <h1 style={style}>
        {old}살 {name} 입니다
      </h1>
    );
  };

  const [count, setCount] = useState(0); // [ 변수 , 핸들러 ] = useState(초기 값)

  return (
    <>
      <div style={{ textAlign: 'center' }} name={name}>
        {isLoading ? <div>로딩중</div> : <div>결과</div>}
      </div>
      <div className="App">
        SOPT {part} PART {showNum(27)}
      </div>
      <MyName style={blueTextAlign} name={name} old={old} />
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  );
}

export default App;
