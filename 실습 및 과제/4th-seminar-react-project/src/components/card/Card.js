import './Card.scss';
import { DeleteOutlined, FileImageOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
/* withRouter 사용시 match push 안적어도 됨 */

// API
import { deleteMemberById } from '../../lib/api/memberApi';

function Card({ memberData, RemoveCard, history }) {
  const onClickRemove = async evt => {
    evt.stopPropagation();
    try {
      await deleteMemberById(memberData.id);
      RemoveCard(memberData.id);
    } catch (e) {
      // fail
    }
  };

  return (
    <div
      className="card"
      onClick={() => history.push(`member/${memberData.id}`)}
      draggable
    >
      <div className="remove-button" onClick={onClickRemove}>
        <DeleteOutlined style={{ fontSize: '16px' }} />
      </div>
      <div
        className="image-area"
        style={{
          backgroundImage: `url(${memberData.profileUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {memberData.profileUrl === '' && (
          <FileImageOutlined style={{ fontSize: '40px' }} />
        )}
      </div>
      <div className="card__content card__text name">{memberData.name}</div>
      <div className="card__content card__text instagram">
        {memberData.instagram}
      </div>
      <div className="card__content card__text introduction">
        {memberData.introduction}
      </div>
      <div className="card__content card__text mbti">{memberData.mbti}</div>
    </div>
  );
}

export default withRouter(Card);
