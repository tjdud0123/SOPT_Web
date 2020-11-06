## ✔️ React App 만들기
` $ npx create-react-app 3rd-seminar-react-project `

## ✔️ 불필요한 아이콘, 코드 삭제 및 변경

#### 🐝 코드 수정
📃 public/index.html

`<html lang="en">` ----> `<html lang="ko">`

`<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />`

`<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />`

...삭제

`<title>React App</title>` ----> `<title>React Github Profile Finder</title>`

#### 🐝 파일 삭제
public/logo192.png
public/logo512.png
src/logo.svg
....

등등...
  
## ✔️ 컴포넌트 구조잡기

📃 App.js
```js
import React from 'react';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <>
      <SearchInput />
      <SearchResult usesr={user} />
    </>
  );
}

export default App;
```

📃 SearchInput.js
```js
import React from 'react';
import { useState } from 'react';
function SearchInput() {

  const [input, setInput] = useState(''); //input 값 조작

  // 인풋값 변할 때 onchange 이벤트로 값 가져와서 set해줌
  const handleChange = e => {
    setInput(e.target.value);
  };

  // onSubmit 이벤트 발생시 form 태그 속성 막기
  const handleSubmit = e => {
    e.preventDefault();
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
```

📃 SearchResult.js
```js
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

```

## ✔️ 데이터 하위 컴포넌트에 넘기기

📃 App.js

```js
import { useState } from 'react';

function App() {

  // 유저 데이터 관리 - 초기화 null
  const [user, setUser] = useState(null);
  ...
  return (
    <>
      <SearchInput />
      <SearchResult user={user} />
    </>
  );
```

## ✔️ API 연결하기 (Axios 사용), API 파일 분리

#### 🐝 폴더 생성
```
src
 ㄴ components
 ㄴ lib
     ㄴ api.js 
```

#### 🐝 Axios 라이브러리 다운

` $ yarn add axios`

#### 🐝 api.js 코드 작성

📃 api.js
```js
import axios from 'axios';

// create을 사용하는 경우 호출 config 커스터마이징 가능
// You can create a new instance of axios with a custom config

const client = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const getUserAPI = async userName => {
  const { data } = await client.get(userName); // data.data 
  return data;
};

```

## ✔️ Input 값 연결하여 API 호출

📃 App.js
```js
...
import { getUserAPI } from './lib/api'; // API 함수 가져오기

function App() {
  ...
  // 유저 호출 후 유저 데이터 set
  const getUser = async userName => {
    const data = await getUserAPI(userName);
    setUser(data);
  };

  return (
    <>
      <SearchInput getUser={getUser} /> // 함수 props로 내려줌
      <SearchResult user={user} />
    </>
  );
}
...

```

📃 SearchInput.js
```js
function SearchInput({ getUser }) 
  // console.log(getUser); 함수를 넘겨받음
  ...
  
  // onSubmit 이벤트 발생시 form 태그 속성 막고 API 호출
    const handleSubmit = e => {
      ...
      getUser(input); // ** 프롭스로 받은 부모 컴포넌트 함수가 실행 됨
      
      /* const getUser = async userName => {
          const data = await getUserAPI(userName);
          setUser(data);
        }; */
        
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
```


## SCSS 이용해 Style 적용하기
` $ yarn add  node-scss`

## Input창 UX 개선

## Promise 상태에 따른 UI 처리

## Component 분리 및 사소한 Style 업데이트
