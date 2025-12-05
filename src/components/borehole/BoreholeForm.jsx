// Borehole Component: BoreholeForm

import React from 'react';

const BoreholeForm = ({ borehole, onSubmit, onCancel }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic placeholder
  };

  return (
    <form className="borehole-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Depth</label>
        <input type="number" />
      </div>
      <div className="form-actions">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default BoreholeForm;
