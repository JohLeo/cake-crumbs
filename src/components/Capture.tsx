import React from 'react';
import html2canvas from 'html2canvas';

interface CaptureProps {
  captureAreaId: string;
  captureAreaWidth?: string;
}

const CaptureIt: React.FC<CaptureProps> = ({ captureAreaId, captureAreaWidth = '30%' }) => {
  const captureAndDownload = () => {
    const captureArea = document.getElementById(captureAreaId);

    if (captureArea) {
      html2canvas(captureArea, {
        scale: 3
      }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'Its-a-Date.png';
        link.click();
      });
    }
  };

  const handleDownloadConfirmation = () => {
    const confirmed = window.confirm('Are you sure you want to download the screenshot?');
    if (confirmed) {
      captureAndDownload();
    }
  };

  return (
    <div style={{ width: captureAreaWidth }}>
      <button onClick={handleDownloadConfirmation}>Capture this</button>
    </div>
  );
};

export default CaptureIt;
