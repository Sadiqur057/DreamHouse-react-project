import NavBar from '../pages/shared/navbar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;