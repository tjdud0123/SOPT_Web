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
import { getMembers, createMember } from '../../lib/api/memberApi';

// redux 사용
import { setMembersToStore } from '../../modules/member';
import { useDispatch } from 'react-redux';

function MemberList({ history, match }) {
  // members 데이터 관리
  const [members, setMembers] = useState([]);
  // 로딩 처리
  const [isLoad, setIsLoad] = useState(false);
  // action dispatch 정의
  const dispatch = useDispatch();
  const saveMembersToStore = data => dispatch(setMembersToStore(data));
  // mounted - call Api IIFE
  useEffect(() => {
    (async () => {
      const { data } = await getMembers();
      setMembers(data); // [{}, {} ...]
      setIsLoad(true);
      // store에 저장
      saveMembersToStore(data);
    })();
  }, []);

  const removeCard = e => {
    e.stopPropagation(); // event bubbling 방지
    /* todo : 삭제 이벤트 API 적용 */
  };

  const onClickCreateCard = async () => {
    try {
      const data = await createMember({
        name: '',
        profileUrl: '',
        instagram: '',
        introduction: '',
        mbti: '',
      });
      setMembers([...members, data]);
    } catch (e) {
      // fail
    }
  };

  const RemoveCard = async memberDataId => {
    setMembers(members.filter(p => p.id !== memberDataId));
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
        <Loading margin="30px" />
      ) : (
        <div className="member-list-content-wrapper">
          {members.map((member, i) => (
            <Card
              key={'card-' + i}
              memberData={member}
              RemoveCard={RemoveCard}
            />
          ))}
          <div className="create-card" onClick={onClickCreateCard}>
            + New
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberList;
