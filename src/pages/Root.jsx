// Root.jsx

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <div>
      <nav>
        <Link to="/login">Login</Link>
        {/* <Link to="/register">Register</Link> */}
      </nav>
      <Outlet />
    </div>
  );
}

export default Root;