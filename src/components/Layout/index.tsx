/** @jsxImportSource @emotion/react */

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      css={{
        width: '500px',
        height: '100vh',
        backgroundColor: '#fff',
        padding: '16px',
      }}
    >
      <Outlet />
    </div>
  );
};

export default Layout;
