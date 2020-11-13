# SOPT_Web
27th 솝트 리액트 스터디

### 🐝 week2 스터디 환경셋팅
- TypeScript
- ESLint
- prettier
- styled-component
- React.js

### 🐝 week3 ~ week4 notion 앱에 리덕스 적용 

#### 패키지 설치

```js
$ yarn add redux
```

```js
$ yarn add react-redux
```

#### member 모듈 생성

📃 src/modules/member.js

```js
// 액션 타입 설정
const SET_MEMBERS = 'member/SET_MEMBERS';

// 액션 생성 함수 - export
export const setMembersToStore = members => ({
  type: SET_MEMBERS,
  members,
});

// 초깃값 설정
const initialState = {
  members: [],
};

// reducer 함수 정의 - export default
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MEMBERS:
      console.log('a :', action);
      return {
        ...state,
        members: action.members,
      };
    default:
      // 지원하지 않는 액션은 상태 유지
      return state;
  }
}
```

#### dispatch 정의 및 호출
📃 MemberList.js

```js
...
// redux 사용
import { setMembersToStore } from '../../modules/member';
import { useDispatch } from 'react-redux';

// action dispatch 정의
  const dispatch = useDispatch();
  const saveMembersToStore = data => dispatch(setMembersToStore(data));

// dispatch 호출
  useEffect(() => {
    (async () => {
      const { data } = await getMembers();
      ...
      // store에 저장
      saveMembersToStore(data);
    })();
  }, []);

```

#### reducer combine해서 내보내기
📃 modules/index.js

```js
import { combineReducers } from 'redux';
import member from './member';

const rootReducer = combineReducers({
  member,
});

export default rootReducer;

```

#### react에 store 적용
📃 index.js

```js
...
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
// store 생성
const store = createStore(rootReducer);
console.log(store.getState());
//{member: { members: [] }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

```

#### Main 페이지에서 잘 저장되어있는지 보기

📃 Main.js

```js
// 스토에어서 불러오기
import { useSelector } from 'react-redux';

function Main() {
  // 스토어
  const { members } = useSelector(state => state.member);
  console.log('saved members : ', members);
  ...
}
// [] -> [{}, {} ...]
```
