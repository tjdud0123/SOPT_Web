import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

function Loading() {
  return (
    <Spin
      indicator={antIcon}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '30px',
        color: '#999',
      }}
    />
  );
}

export default Loading;
