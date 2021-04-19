import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

function PrivateRoute ({ children, ...rest }: any) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={() => (auth.user ? children : <Redirect to='/login' />)}
    ></Route>
  );
};

export default PrivateRoute;