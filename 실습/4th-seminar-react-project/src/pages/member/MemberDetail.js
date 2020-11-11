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
  console.log(memberState);
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
