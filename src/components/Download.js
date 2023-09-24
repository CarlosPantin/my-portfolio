import React from 'react';
import myCV from "../assets/MyCV.pdf";


function Download() {
    const handleDownload = () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = myCV; 
      downloadLink.download = 'resume.pdf'; 
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
  
    return (
     
          <a target="_blank"
          rel="noopener noreferrer"
          className="github-button"
          onClick={handleDownload}>CV</a>
    );
  }
  
  export default Download;