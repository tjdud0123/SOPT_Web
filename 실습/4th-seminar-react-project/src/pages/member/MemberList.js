import './MemberList.scss';
import { useEffect, useState } from 'react';
// 컴포넌트 및 아이콘
import Button from '../../components/button';
import Card from '../../components/card';
import Loading from '../../components/loading';
import {
  AppstoreOutlined,
  DownOutlined,
  SearchOutlined,
} from '@ant-design/icons';

// API
import getMembersApi from '../../lib/api/memberApi';
function MemberList({ history, match }) {
  // members 데이터 관리
  const [members, setMembers] = useState([]);
  // 로딩 처리
  const [isLoad, setIsLoad] = useState(false);
  // mounted - call Api IIFE
  useEffect(() => {
    (async () => {
      const { data } = await getMembersApi();
      setMembers(data); // [{}, {} ...]
      setIsLoad(true);
    })();
  }, []);

  const removeCard = e => {
    e.stopPropagation(); // event bubbling 방지
    /* todo : 삭제 이벤트 API 적용 */
  };

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

      <hr />
      {!isLoad ? (
        <Loading />
      ) : (
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
    </div>
  );
}

export default MemberList;
