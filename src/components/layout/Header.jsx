// Layout Component: Header

import React from 'react';

const Header = ({ title = 'GDIS' }) => {
  return (
    <header className="app-header">
      <div className="header-logo">
        <h1>{title}</h1>
      </div>
      <nav className="header-nav">
        {/* Navigation items placeholder */}
      </nav>
      <div className="header-actions">
        {/* User actions placeholder */}
      </div>
    </header>
  );
};

export default Header;
