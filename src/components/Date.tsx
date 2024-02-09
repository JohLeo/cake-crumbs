import React from 'react';
import { useLocation } from 'react-router-dom';
import CaptureIt from './Capture';
import {
  SumContainer,
  SumLetter,
  DateHead,
  DateBigP,
  DateP,
  DateTinyP
} from './style/date-style';

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
          {formData.toName}, I would love to go on a date with you!
        </DateBigP>

        <DateP>
          I would prefer being {formData.where} for this date and {formData.selectedOption} would be so much fun!
        </DateP>

        <DateP>
          Im also thinking a great date would be: <br />
          {formData.message}
        </DateP>


        <DateP>
          Pick me up on the 14th of February at {formData.selectedTime}
        </DateP>

        <DateTinyP>{'('}If anything changes, contact me at {formData.tel}{')'}</DateTinyP>


        <DateBigP>
          Yours sincerely, <br />
          {formData.myName}.
        </DateBigP>


        <CaptureIt captureAreaId="captureArea" />
      </SumLetter>


    </SumContainer>
  )
};

export default ItsADate;