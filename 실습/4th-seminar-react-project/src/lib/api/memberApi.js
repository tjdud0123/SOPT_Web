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
