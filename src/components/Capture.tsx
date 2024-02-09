import React from 'react';
import html2canvas from 'html2canvas';
import { CaptureDiv, CaptureButton } from './style/capture-style';

interface CaptureProps {
  captureAreaId: string;
}

const CaptureIt: React.FC<CaptureProps> = ({ captureAreaId }) => {
  const captureAndDownload = () => {
    const captureArea = document.getElementById(captureAreaId);

    if (captureArea) {
      const button = captureArea.querySelector('button');
      if (button) {
        button.style.display = 'none';
      }

      html2canvas(captureArea, {
        scale: 3
      }).then(canvas => {
        if (button) {
          button.style.display = 'block';
        }

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
    <CaptureDiv>
      <CaptureButton onClick={handleDownloadConfirmation}>Capture this</CaptureButton>
    </CaptureDiv>
  );
};

export default CaptureIt;
