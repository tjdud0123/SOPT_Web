# 🧚 Reac로 Notion 따라하기

<img src="https://im7.ezgif.com/tmp/ezgif-7-53d8c7ae6160.gif" alt="drawing" width="800"/>

## ✔️ React Notion App 만들기

`$ npx create-react-app 4th-seminar-react-project`

## ✔️ 불필요한 아이콘, 코드 삭제 및 변경

## ✔️ scss 세팅 및 적용

#### 🐝 sass 라이브러리 다운

` $ yarn add node-sass@4.14.1`

#### 🐝 scss 파일 생성 및 import

📃 App.scss

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

* {
  box-sizing: border-box;
}

.App {
  min-width: 600px;
  padding: 0.5rem 1rem;
}
...
```

📃 App.js

```js
import './App.scss';
```

## ✔️ react-router-dom을 이용한 전체 Component 구성하기

## & 중첩 라우팅을 이용해 MemberList, MemberDetail 분리

#### 🐝 react-router-dom 라이브러리 다운

` $ yarn add react-router-dom`

#### 🐝 컴포넌트 구조 설계 및 구조짜기

<img src="https://user-images.githubusercontent.com/22907830/98837151-eff51a00-2485-11eb-84d7-ce851e99121b.png" alt="drawing" width="600"/>

```
#  폴더구조
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.js
│   ├── App.scss
│   ├── components
│   │   ├── button
│   │   │   ├── Button.js
│   │   │   ├── Button.scss
│   │   │   └── index.js
│   │   ├── card
│   │   │   ├── Card.js
│   │   │   ├── Card.scss
│   │   │   └── index.js
│   │   ├── header
│   │   │   ├── MainHeader.js
│   │   │   ├── MainHeader.scss
│   │   │   └── index.js
│   │   └── loading
│   │       ├── Loading.js
│   │       └── index.js
│   ├── index.css
│   ├── index.js
│   ├── lib
│   │   └── api
│   │       └── memberApi.js
│   └── pages
│       ├── main
│       │   └── Main.js
│       └── member
│           ├── Member.js
│           ├── MemberDetail.js
│           ├── MemberDetail.scss
│           ├── MemberDetailContainer.js
│           ├── MemberList.js
│           └── MemberList.scss
└── yarn.lock

```

📃 App.js

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import Member from './pages/member/Member';
import MainHeader from './components/header/MainHeader';

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader /> {/* global navigation bar */}
        <Switch>
          {/* exact : path에 따라 맞는 컴포넌트 출력 */}
          <Route exact path="/" component={Main} /> {/* 메인 화면 */}
          <Route path="/member" component={Member} /> {/* 멤버 리스트 출력 */}
          <Route path="*">
            {/* 404 페이지 */}
            <h1> 404 NOT FOUND </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

📃 MainHeader.js

```js
function MainHeader() {
  return <header>여기는 header입니다</header>;
}

export default MainHeader;
```

📃 Main.js

```js
function Main() {
  return <h1> 메인 페이지 </h1>;
}

export default Main;
```

📃 Member.js

```js
import { Switch, Route } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetail from './MemberDetail';

function Member({ match }) {
  // match : { params, url, path ... }
  // match.path : '/member'
  return (
    <section>
      <Switch>
        {/* exact path는 정확히 라우트가 맞아떨어져야만 컴포넌트 select */}
        <Route exact path={match.path} component={MemberList} />
        <Route path={`${match.path}/:id`} component={MemberDetail} />
      </Switch>
    </section>
  );
}

export default Member;
```

📃 MemberList.js

```js
function MemberList() {
  return <h1>MemberList Page</h1>;
}

export default MemberList;
```

📃 MemberDetail.js

```js
function MemberDetail() {
  return <h1>MemberDetail Page</h1>;
}

export default MemberDetail;
```

## ✔️ MainHeader 만들기

#### 🐝 history push를 위해 route 컴포넌트로 변경

📃 App.js

```js
  ...
  <div className="App">
    {/* global navigation bar */}
    <Route component={MainHeader} />
    <Switch>
    ...
```

#### 🐝 antd, antd/icons 다운

`$ yarn add antd`

`$ yarn add @ant-design/icons`

#### 🐝 Button component 생성

📃 Button.js

```js
import './Button.scss';

function Button({ text, textColor = '#444', onClickFunc, leftIcon }) {
  return (
    <span className="button" style={{ color: textColor }} onClick={onClickFunc}>
      {leftIcon && leftIcon.render()}
      &nbsp;
      {text}
    </span>
  );
}

export default Button;
```

📃 Button.scss

```css
.button {
  border-radius: 4px;
  padding: 4px 8px;
  &:hover {
    background: #eee;
    cursor: pointer;
  }
  &:active {
    background: #ccc;
  }
}
```

#### 🐝 header component 작성

📃 MainHeader.js

```js
import './MainHeader.scss';
import { MenuOutlined } from '@ant-design/icons';
import Button from '../button/Button';

function MainHeader({ history }) {
  // history : { go, goBack, goForward, location, push ...}
  return (
    <header className="main-header">
      <nav className="main-header__nav" id="left-gnb">
        <MenuOutlined type="icon" className="main-header-icon" />
        <Button
          text="[ON SOPT] Web Part"
          onClickFunc={() => history.push('/')}
        ></Button>
        <span>&nbsp;/&nbsp;</span>
        <Button
          text="파트원 소개"
          onClickFunc={() => history.push('/member')}
        ></Button>
      </nav>
      <nav className="main-header__nav" id="right-gnb">
        <Button text="Share"></Button>
        <Button text="Updates"></Button>
        <Button text="Favorites"></Button>
        <Button text="…"></Button>
      </nav>
    </header>
  );
}

export default MainHeader;
```

📃 MainHeader.scss

```css
.main-header {
  display: flex;
  height: 45px;
  padding: 12px;
  font-size: 14px;
  justify-content: space-between;
  .empty {
    flex: 1;
  }
  &-icon {
    height: 100%;
    margin-right: 12px;
    cursor: pointer;
  }
}
```

## ✔️ MemberList & Card Component 구현

#### 🐝 scss 파일 작성

📃 Card.scss

📃 MemberList.scss

#### 🐝 axios 다운

`$ yarn add axios`

#### 🐝 api 연결 및 출력

📃 src/lib/api/memberApi.js

```js
import axios from 'axios';
const getMemberUrl =
  'http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members';

const getMembersAPI = async () => {
  try {
    const { data } = await axios.get(`${getMemberUrl}`);
    console.log('[SUCCESS] GET MEMBERS', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET MEMBERS', e);
  }
};

export default getMembersAPI;
```

📃 MemberList.js

```js
import { useEffect, useState } from 'react';
// API
import getMembersApi from '../../lib/api/memberApi';


function MemberList({ history, match }) {
  // members 데이터 관리
  const [members, setMembers] = useState([]);
  // mounted - call Api IIFE
  useEffect(() => {
    (async () => {
      const { data } = await getMembersApi();
      setMembers(data); // [{}, {} ...]
    })();
  }, []);
  const removeCard = e => {
    e.stopPropagation(); // event bubbling 방지
    /* todo : 삭제 이벤트 API 적용 */
  };

  return (
    ...
  <hr />
    <div className="member-list-content-wrapper">
      {members.map((member, i) => (
        <Card
          key={'card-' + i}
          route={{ history, match }}
          memberData={member}
          onRemoveCard={removeCard}
        />
      ))}
    </div>
  )
```

#### 🐝 MemberList 나머지 부분 작성

📃 MemberList.js

```js
import './MemberList.scss';
// 컴포넌트 및 아이콘
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import {
  AppstoreOutlined,
  DownOutlined,
  SearchOutlined,
} from '@ant-design/icons';

function MemberList({ history, match }) {
  ...

  return (
    <div className="member-list">
      <div className="member-list__title">&#11088; 파트원 소개</div>
      <div className="member-list__header member-list-header">
        <div className="member-list-header__nav">
          <AppstoreOutlined style={{ marginRight: '5px' }} />
          Gallery view
          <DownOutlined style={{ fontSize: '10px', marginLeft: '5px' }} />
        </div>
        <div className="member-list-header__empty"></div>
        <Button text="Properties" textColor="#777"></Button>
        <Button text="Filter" textColor="#777"></Button>
        <Button text="Sort" textColor="#777"></Button>
        <Button
          text="Search"
          textColor="#777"
          leftIcon={SearchOutlined}
        ></Button>
        <Button text="..." textColor="#777"></Button>
        <div className="new-btn new-btn__text">New</div>
        <div className="new-btn new-btn__icon">
          <DownOutlined />
        </div>
      </div>
      ...
  );
}
```

#### 🐝 Card 컴포넌트 생성

📃 Card.js

```js
import './Card.scss';
import { DeleteOutlined, FileImageOutlined } from '@ant-design/icons';
function Card({ route, memberData, onRemoveCard }) {
  return (
    <div
      className="card"
      onClick={() => route.history.push(`${route.match.path}/${memberData.id}`)}
      draggable
    >
      <div className="remove-button" onClick={onRemoveCard}>
        <DeleteOutlined style={{ fontSize: '16px' }} />
      </div>
      <div
        className="image-area"
        style={{
          backgroundImage: `url(${memberData.profileUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {memberData.profileUrl === '' && (
          <FileImageOutlined style={{ fontSize: '40px' }} />
        )}
      </div>
      <div className="card__content card__text name">{memberData.name}</div>
      <div className="card__content card__text instagram">
        {memberData.instagram}
      </div>
      <div className="card__content card__text introduction">
        {memberData.introduction}
      </div>
      <div className="card__content card__text mbti">{memberData.mbti}</div>
    </div>
  );
}

export default Card;
```

## ✔️ Loading Component 구현

#### 🐝 Loading 컴포넌트 생성

📃 Loading.js

```js
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

function Loading({ margin }) {
  return (
    <Spin
      indicator={antIcon}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: margin,
        color: '#999',
      }}
    />
  );
}

export default Loading;
```

#### 🐝 Loading 상태 관리

📃 MemberList.js

```js
...
import Loading from '../../components/loading/Loading';
...
function MemberList({ history, match }) {
  ...
  // 로딩 처리
  const [isLoad, setIsLoad] = useState(false);
  // mounted - call Api IIFE
  useEffect(() => {
    (async () => {
      const { data } = await getMembersApi();
      setMembers(data); // [{}, {} ...]
      setIsLoad(true); // 데이터 셋팅 완료 이후 true로 변경
    })();
  }, []);
  ...
  return (
    ...
    <hr />
      {!isLoad ? (
        <Loading margin="30px" /> // 로딩이 완료 돠지 않았다면 Loading 컴포넌트
      ) : ( // 로딩이 완료 돠었을 때
        <div className="member-list-content-wrapper">
          {members.map((member, i) => (
            <Card
              key={'card-' + i}
              route={{ history, match }}
              memberData={member}
              onRemoveCard={removeCard}
            />
          ))}
        </div>
      )}
  )

```

## ✔️ MemberDetail Component 구현

#### 🐝 scss 파일 추가

📃 MemberDetail.scss

```css
.member-detail {
  width: 720px;
  margin: 0 auto;
  ...
```

#### 🐝 MemberDetailContainer 구현

📃 Member.js

```js
...
import MemberDetailContainer from './MemberDetail';

  ...
  <Switch>
    ...
    <Route path={`${match.path}/:id`} component={MemberDetailContainer} />
  </Switch>
```

📃 MemberDetailContainer.js

```js
import { useEffect, useState } from 'react';
// UI 컴포넌트
import MemberDetail from './MemberDetail';
import Loading from '../../components/loading';

function MemberDetailContainer({ match }) {
  // match : {path: "/member/:id", url: "/member/1", params: {id: "1"…} ...}

  // 데이터 관리
  const [memberState, setMemberState] = useState({
    status: 'idle',
    member: null,
  });

  // 멤버 정보 수정시 상태 변화 적용
  const onChangeInputs = evt => {
    const { name, value } = evt.target;
    setMemberState({
      status: 'resolved',
      member: {
        ...memberState.member,
        [name]: value, // name이라는 property가 아니라 변수를 속성으로 사용할 때는 [] 사용
      },
    });
    /* todo : 서버에 update 로직이 필요 */
  };

  // switch 사용해서 member pomise 상태에 따라 loading 및 에러 처리 관리
  switch (memberState.status) {
    case 'pending':
      return <Loading margin="200px" />;
    case 'resolved':
      return (
        <MemberDetail
          onChangeInputs={onChangeInputs}
          memberState={memberState}
        />
      );
    case 'rejected':
      return <h1>해당 멤버가 없습니다</h1>;
    case 'idle':
    default:
      return <div></div>;
  }
}

export default MemberDetailContainer;
```

#### 🐝 MemberDetail UI 구현

📃 MemberDetail.js

```js
import './MemberDetail.scss';

// 컴포넌트 및 아이콘
import Button from '../../components/button/Button';
import { Input } from 'antd';
import {
  InstagramOutlined,
  AlignLeftOutlined,
  RadarChartOutlined,
} from '@ant-design/icons';

// resolve 상태일 때 UI
function MemberDetail({ onChangeInputs, memberState }) {
  return (
    <div className="member-detail">
      <div className="member-detail__button-area">
        <Button text="Add icon"></Button>
        <Button text="Add cover"></Button>
      </div>
      <div className="member-detail__content name">
        {memberState.member.name}
      </div>
      <hr style={{ borderTop: 'solid 1px #eee', marginBottom: '24px' }} />
      <div className="member-detail__content">
        <div className="content-title">
          <InstagramOutlined />
          &nbsp; 인스타 아이디
        </div>
        <Input
          className="content-input"
          bordered={false}
          name="instagram"
          value={memberState.member.instagram}
          onChange={onChangeInputs}
        />
      </div>
      <div className="member-detail__content">
        <div className="content-title">
          <AlignLeftOutlined />
          &nbsp; 한 줄 소개
        </div>
        <Input
          className="content-input"
          bordered={false}
          name="introduction"
          value={memberState.member.introduction}
          onChange={onChangeInputs}
        />
      </div>
      <div className="member-detail__content">
        <div className="content-title">
          <RadarChartOutlined />
          &nbsp; mbti
        </div>
        <Input
          className="content-input"
          bordered={false}
          name="mbti"
          value={memberState.member.mbti}
          onChange={onChangeInputs}
        />
      </div>
    </div>
  );
}

export default MemberDetail;
```

#### 🐝 Api 추가 및 import 코드 수정 + 이름 수정

📃 memberApi.js

```js
const getMembers = async () => {
  ...
};

const getMemberById = async id => {
  try {
    const { data } = await axios.get(`${getMemberUrl}/${id}`);
    console.log('[SUCCESS] GET MEMBER', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET MEMBER', e);
    throw e;
  }
};

export { getMembers, getMemberById };
```

📃 MemberList.js

```js
import { getMembers } from '../../lib/api/memberApi';
...
function MemberList({ history, match }) {
  ...
  useEffect(() => {
      ...
      const { data } = await getMembers();
      ...
```

📃 MemberDetailContainer.js

```js
// API
import { getMemberById } from '../../lib/api/memberApi';

function MemberDetailContainer({ match }) {
  ...
  // mounted - call Api IIFE
  useEffect(() => {
    (async () => {
      try {
        setMemberState({ status: 'pending', member: null });
        const { data } = await getMemberById(match.params.id);
        setMemberState({ status: 'resolved', member: data });
      } catch (e) {
        setMemberState({ status: 'rejected', member: null });
      }
    })();
  }, []);
  ...
}
```
