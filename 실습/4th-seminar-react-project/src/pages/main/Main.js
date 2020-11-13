// 스토에어서 불러오기
import { useSelector } from 'react-redux';

function Main() {
  // 스토어
  const { members } = useSelector(state => state.member);
  console.log('saved members : ', members);
  return <h1> 메인 페이지 </h1>;
}

export default Main;
