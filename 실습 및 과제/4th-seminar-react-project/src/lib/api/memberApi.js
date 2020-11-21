import axios from 'axios';
const MemberUrl =
  'http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members';

const getMembers = async () => {
  try {
    const { data } = await axios.get(`${MemberUrl}`);
    console.log('[SUCCESS] GET MEMBERS', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET MEMBERS', e);
  }
};

const getMemberById = async id => {
  try {
    const { data } = await axios.get(`${MemberUrl}/${id}`);
    console.log('[SUCCESS] GET MEMBER', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET MEMBER', e);
    throw e;
  }
};

const updateMemberById = async (id, member) => {
  try {
    const { data } = await axios.put(`${MemberUrl}/${id}`, member);
    console.log('[SUCCESS] UPDATE MEMBER', data);
    return data;
  } catch (e) {
    console.error('[FAIL] UPDATE MEMBER', e);
    throw e;
  }
};

const createMember = async member => {
  try {
    const { data } = await axios.post(`${MemberUrl}`, member);
    console.log('[SUCCESS] CREATE MEMBER', data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] CREATE MEMBER', e);
    throw e;
  }
};

const deleteMemberById = async id => {
  try {
    const { data } = await axios.delete(`${MemberUrl}/${id}`);
    console.log('[SUCCESS] DELETE MEMBER', data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] DELETE MEMBER');
    throw e;
  }
};

export {
  getMembers,
  getMemberById,
  updateMemberById,
  createMember,
  deleteMemberById,
};
