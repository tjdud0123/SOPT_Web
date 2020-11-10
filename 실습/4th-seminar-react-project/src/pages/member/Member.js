import { Switch, Route } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetail from './MemberDetail';

function Member({ match }) {
  // match : { params, url, path ... }
  // match.path : '/member'
  return (
    <section>
      <Switch>
        {/* exact path는 정확히 라우트가 맞아떨어져야만 컴포넌트 select */}
        <Route exact path={match.path} component={MemberList} />
        <Route path={`${match.path}/:id`} component={MemberDetail} />
      </Switch>
    </section>
  );
}

export default Member;
