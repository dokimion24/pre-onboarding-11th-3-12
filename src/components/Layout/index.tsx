/** @jsxImportSource @emotion/react */

import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  return (
    <div
      css={{
        maxWidth: '500px',
        height: '100%',
        backgroundColor: '#fff',
        padding: '16px',
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
