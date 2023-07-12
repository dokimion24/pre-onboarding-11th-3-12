/** @jsxImportSource @emotion/react */

import { Outlet } from 'react-router-dom';

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
      <Outlet />
    </div>
  );
};

export default Layout;
