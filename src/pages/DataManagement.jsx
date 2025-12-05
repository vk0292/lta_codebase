// Pages: Data Management

import React from 'react';
import FileUploader from '@components/data/FileUploader';
import DataTable from '@components/data/DataTable';

const DataManagement = () => {
  return (
    <div className="data-management-page">
      <h1>Data Management</h1>
      <FileUploader />
      <DataTable />
    </div>
  );
};

export default DataManagement;
