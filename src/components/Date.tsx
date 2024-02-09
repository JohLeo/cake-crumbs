import React from 'react';
import { useLocation } from 'react-router-dom';
import CaptureIt from './Capture';
import { SumContainer, SumLetter, DateHead, DateBigP, DateP } from './style/date-style';

interface FormData {
  myName: string;
  toName: string;
  message: string;
  where: string;
  selectedOption: string;
  tel: number;
  selectedTime: string;
}

const ItsADate: React.FC = () => {
  const location = useLocation();
  const formData: FormData = (location.state as { formData: FormData })?.formData;

  if (!formData) {
    return <div>Form data not available</div>;
  }

  return (
    <SumContainer>

      <SumLetter id="captureArea">
        <DateHead>It's a YES!</DateHead>

        <DateBigP>
          My dear {formData.toName}, I would love to go on a date with you!
        </DateBigP>

        <DateP>
          I would prefer being {formData.where} for this date. <br />
          Im thinking a great date would be:
          {formData.message}
        </DateP>

        <DateP>
          Where: {formData.selectedOption} <br />
          Pick me up on the 14th of February at {formData.selectedTime} <br /><br />
          If anything changes, contact me, {formData.tel}
        </DateP>

        <DateBigP>Yours sincerely, {formData.myName}.</DateBigP>


        <CaptureIt captureAreaId="captureArea" />
      </SumLetter>


    </SumContainer>
  )
};

export default ItsADate;