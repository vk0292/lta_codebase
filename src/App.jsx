// Main App Component

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import DataManagement from './pages/DataManagement';
import Boreholes from './pages/Boreholes';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import '@styles/index.css';
import '@styles/App.css';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/data" element={<DataManagement />} />
          <Route path="/boreholes" element={<Boreholes />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
