// Data Component: FileUploader

import React from 'react';

const FileUploader = ({ fileType, onUpload }) => {
  const handleFileChange = (event) => {
    // File upload handler placeholder
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileChange} />
      <button>Upload</button>
    </div>
  );
};

export default FileUploader;
