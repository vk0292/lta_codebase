// Layout Component: Main Layout

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = ({ children, showSidebar = true }) => {
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        {showSidebar && <Sidebar />}
        <main className="app-main">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
