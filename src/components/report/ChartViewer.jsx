// Report Component: ChartViewer

import React from 'react';

const ChartViewer = ({ graph }) => {
  return (
    <div className="chart-viewer">
      <h3>{graph?.title || 'Chart'}</h3>
      <div className="chart-container">
        {/* Chart rendering placeholder */}
      </div>
    </div>
  );
};

export default ChartViewer;
