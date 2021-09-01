import { Route, RouteComponentProps } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import UserDetailPage from './UserDetailPage';
import UsersListPage from './UsersListPage';

const Empresa:  React.FC<RouteComponentProps> = ({match}) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={UsersListPage} />
      <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
    </IonRouterOutlet>
  );
};

export default Empresa;
