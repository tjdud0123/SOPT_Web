import { useEffect, useState } from 'react';
// UI 컴포넌트
import MemberDetail from './MemberDetail';
import Loading from '../../components/loading';
// API
import { getMemberById, updateMemberById } from '../../lib/api/memberApi';

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

  const setCurrentValue = memberData => {
    setMemberState({
      status: 'resolved',
      member: memberData,
    });
  };
  // 멤버 정보 수정시 상태 변화 적용 - 디바운싱 handle
  const [timer, setTimer] = useState(0); // 디바운싱 타이머

  const onChangeInputs = async evt => {
    const { name, value } = evt.target;
    const memberData = {
      ...memberState.member,
      [name]: value,
    };
    setCurrentValue(memberData);
    // 디바운싱 - 마지막 호출만 적용
    if (timer) {
      console.log('clear timer');
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      try {
        await updateMemberById(match.params.id, memberData);
      } catch (e) {
        console.error('error', e);
      }
    }, 800);
    setTimer(newTimer);
  };

  // switch 사용해서 member promise 상태에 따라 loading 및 에러 처리 관리
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
