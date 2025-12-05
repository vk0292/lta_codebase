// Layout Component: Sidebar

import React from 'react';

const Sidebar = ({ isOpen = true }) => {
  return (
    <aside className={`app-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        {/* Sidebar content placeholder */}
      </div>
    </aside>
  );
};

export default Sidebar;
