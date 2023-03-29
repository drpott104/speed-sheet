import { Link } from 'react-router-dom';
import AuthPage from '../../Pages/AuthPage/AuthPage';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      if (user) {
        <>
          <Link to="/orders">Order History</Link>
          <Link to="/orders/new">New Order</Link>
          <span>Welcome, {user.name}</span>
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
      } else {
        <AuthPage />
      }
    </nav>
  );
}