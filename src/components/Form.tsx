import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  FormTitle,
  FormTo,
  FormP,
  FormInfo,
  FormLabel,
  NameInput,
  RadioButton,
  RadioLabel,
  StyledSelect,
  ColContainer,
  TimeInput,
  TextForm,
  CharSpan,
  RowContainer,
  FormButton
} from './style/reply-style';

interface FormData {
  myName: string;
  toName: string;
  message: string;
  where: string;
  selectedOption: string;
  tel: string;
  selectedTime: string;
}

const FormToLove: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    myName: '',
    toName: '',
    message: '',
    where: '',
    selectedOption: '',
    tel: '',
    selectedTime: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'tel' ? formatPhoneNumber(value) : value
    });
  };

  const renderDropdown = () => {
    if (formData.where === 'out') {
      return (
        <StyledSelect
          id="dropdown"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="drinks & dinner">Drinks & dinner</option>
          <option value="movie & Dinner">Movie & Dinner</option>
          <option value="brunch & airhockey">Brunch & airhockey</option>
          <option value="dart & beers">Dart & beers</option>
          <option value="picnic & ice skating">Picnic & ice skating</option>
        </StyledSelect>
      );
    } else if (formData.where === 'surprised') {
      return (
        <StyledSelect
          id="dropdown"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="the outdoors">But let it include the outdoors</option>
          <option value="but tasty food">As long as the food is tasty</option>
          <option value="dresscode">Just let me know what to wear</option>
          <option value="a total surprise">Totally up to you!</option>
        </StyledSelect>
      );
    } else if (formData.where === 'home') {
      return (
        <StyledSelect
          id="dropdown"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="game night">Game night please</option>
          <option value="movie & chill">Movie & chill</option>
          <option value="wine & cook">Drink wine & cook together</option>
          <option value="eat all the snacks & serie binge">Eat all the snacks & binge a serie</option>
        </StyledSelect>
      );
    } else {
      return null;
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setFormData({
      ...formData,
      message: inputValue.slice(0, 500)
    });
  };
  const remainingCharacters = 500 - formData.message.length;

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      selectedTime: value
    }));
  };



  const formatPhoneNumber = (phoneNumber: string) => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');

    const formattedPhoneNumber = digitsOnly.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');

    return formattedPhoneNumber;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.myName && formData.toName && formData.message && formData.where && formData.selectedOption && formData.tel) {
      navigate('/date', { state: { formData } });
    } else {
      alert('Make sure you filled it all in, thank you!');
    }
  }


  return (
    <div>
      <FormTitle>You said yes!</FormTitle>
      <FormP>Do you mind answering a few questions?</FormP>
      <FormTo onSubmit={handleSubmit}>

        <ColContainer>
          <FormInfo>
            What would be your prefered venue?
          </FormInfo>
          <RowContainer>
            <RadioLabel htmlFor="whereOut">

              <RadioButton
                type="radio"
                id="whereOut"
                name="where"
                value="out"
                checked={formData.where === 'out'}
                onChange={handleInputChange}
                required
              />
              <FormInfo>
                Going out
              </FormInfo>
            </RadioLabel>

            <RadioLabel htmlFor="whereSurprised">
              <RadioButton
                type="radio"
                id="whereSurprised"
                name="where"
                value="surprised"
                checked={formData.where === 'surprised'}
                onChange={handleInputChange}
                required
              />
              <FormInfo>
                Surprise me
              </FormInfo>
            </RadioLabel>

            <RadioLabel htmlFor="whereHome">
              <RadioButton
                type="radio"
                id="whereHome"
                name="where"
                value="home"
                checked={formData.where === 'home'}
                onChange={handleInputChange}
                required
              />
              <FormInfo>
                At home
              </FormInfo>
            </RadioLabel>
          </RowContainer>
        </ColContainer>

        {renderDropdown()}


        <FormLabel htmlFor="message">Decribe your wishes</FormLabel>
        <TextForm
          id="message"
          name="message"
          value={formData.message}
          onChange={handleTextChange}
          required
        />
        <CharSpan>{remainingCharacters}</CharSpan>

        <label htmlFor="timeInput">Select a time:</label>
        <TimeInput
          type="time"
          id="timeInput"
          name="timeInput"
          value={formData.selectedTime}
          onChange={handleTimeChange}
          required
        />

        <div>
          <FormLabel htmlFor="myName">Your name:</FormLabel>
          <NameInput
            type="text"
            id="myName"
            name="myName"
            placeholder='Name'
            value={formData.myName}
            onChange={handleInputChange}
            autoComplete='name'
          />
        </div>

        <div>
          <FormLabel htmlFor="toName">To Name:</FormLabel>
          <NameInput
            type="text"
            id="toName"
            name="toName"
            placeholder='Name'
            value={formData.toName}
            onChange={handleInputChange}
            autoComplete='name'
          />
        </div>


        <div>
          <FormLabel htmlFor="tel">Phone number:</FormLabel>
          <NameInput
            type="tel"
            id="tel"
            name="tel"
            placeholder='Enter your phone number'
            value={formData.tel}
            onChange={handleInputChange}
            autoComplete='tel'
          />
        </div>


        <FormButton type="submit">Submit</FormButton>
      </FormTo>
    </div>
  );
};

export default FormToLove;
