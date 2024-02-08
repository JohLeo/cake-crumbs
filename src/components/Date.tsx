import React from 'react';
import { useLocation } from 'react-router-dom';
import CaptureIt from './Capture';

interface FormData {
  myName: string;
  toName: string;
  message: string;
  where: string;
  selectedOption: string;
  email: string;
}

const ItsADate: React.FC = () => {
  const location = useLocation();
  const formData: FormData = (location.state as { formData: FormData })?.formData;

  if (!formData) {
    return <div>Form data not available</div>;
  }

  return (
    <div>
      Im going to an inbox and there i will spread som joy!

      <div id="captureArea">
        <h2>Summary of Form Data:</h2>
        <p>Name: {formData.myName}</p>
        <p>To Name: {formData.toName}</p>
        <p>Message: {formData.message}</p>
        <p>Where: {formData.where}</p>
        <p>Selected Option: {formData.selectedOption}</p>
        <p>Email: {formData.email}</p>
      </div>
      <CaptureIt captureAreaId="captureArea" />

    </div>
  )
};

export default ItsADate;