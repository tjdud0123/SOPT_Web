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
