import './MainHeader.scss';
import { MenuOutlined } from '@ant-design/icons';
import Button from '../button';

function MainHeader({ history }) {
  // history : { go, goBack, goForward, location, push ...}
  return (
    <header className="main-header">
      <nav className="main-header__nav" id="left-gnb">
        <MenuOutlined type="icon" className="main-header-icon" />
        <Button
          text="[ON SOPT] Web Part"
          onClickFunc={() => history.push('/')}
        ></Button>
        <span>&nbsp;/&nbsp;</span>
        <Button
          text="파트원 소개"
          onClickFunc={() => history.push('/member')}
        ></Button>
      </nav>
      <nav className="main-header__nav" id="right-gnb">
        <Button text="Share"></Button>
        <Button text="Updates"></Button>
        <Button text="Favorites"></Button>
        <Button text="…"></Button>
      </nav>
    </header>
  );
}

export default MainHeader;
