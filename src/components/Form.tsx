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
  email: string;
}

const FormToLove: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    myName: '',
    toName: '',
    message: '',
    where: '',
    selectedOption: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
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
          <option value="Dinner">Dinner</option>
          <option value="Iceskating">Ice skating</option>
        </StyledSelect>
      );
    } else if (formData.where === 'away') {
      return (
        <StyledSelect
          id="dropdown"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="Säffle">Säffle</option>
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
          <option value="Playstation">Playstation</option>
          <option value="Netflix and chill">Netflix and chill</option>
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


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.myName && formData.toName && formData.message && formData.where && formData.selectedOption && formData.email) {
      navigate('/date', { state: { formData } });
    } else {
      alert('Please fill in all fields');
    }
  }


  return (
    <div>
      <FormTitle>Would you like</FormTitle>
      <FormP>Would you want to do this or that</FormP>
      <FormTo onSubmit={handleSubmit}>

        <ColContainer>
          <FormInfo>
            Where:
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
                Out
              </FormInfo>
            </RadioLabel>

            <RadioLabel htmlFor="whereAway">
              <RadioButton
                type="radio"
                id="whereAway"
                name="where"
                value="away"
                checked={formData.where === 'away'}
                onChange={handleInputChange}
                required
              />
              <FormInfo>
                Away
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
                Home
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
          <FormLabel htmlFor="email">Email:</FormLabel>
          <NameInput
            type="email"
            id="email"
            name="email"
            placeholder='E-mail'
            value={formData.email}
            onChange={handleInputChange}
            autoComplete='email'
          />
        </div>


        <FormButton type="submit">Submit</FormButton>
      </FormTo>
    </div>
  );
};

export default FormToLove;
