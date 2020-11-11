import { useEffect, useState } from 'react';
// UI 컴포넌트
import MemberDetail from './MemberDetail';
import Loading from '../../components/loading';
// API
import { getMemberById } from '../../lib/api/memberApi';

function MemberDetailContainer({ match }) {
  // match : {path: "/member/:id", url: "/member/1", params: {id: "1"…} ...}

  // 데이터 관리
  const [memberState, setMemberState] = useState({
    status: 'idle',
    member: null,
  });

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
