import axios from 'axios';
const getMemberUrl =
  'http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members';

const getMembers = async () => {
  try {
    const { data } = await axios.get(`${getMemberUrl}`);
    console.log('[SUCCESS] GET MEMBERS', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET MEMBERS', e);
  }
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
