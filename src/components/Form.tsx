import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FormTitle, FormTo, FormP, LabTo, InpTo, TextCont, TextForm, CharSpan } from './style/reply-style';

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

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setFormData({
      ...formData,
      message: inputValue.slice(0, 500)
    });
  };

  const remainingCharacters = 500 - formData.message.length;


  const renderDropdown = () => {
    if (formData.where === 'out') {
      return (
        <select
          id="dropdown"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="Dinner">Dinner</option>
          <option value="Iceskating">Ice skating</option>
        </select>
      );
    } else if (formData.where === 'away') {
      return (
        <select
          id="dropdown"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="Säffle">Säffle</option>
        </select>
      );
    } else if (formData.where === 'home') {
      return (
        <select
          id="dropdown"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="Playstation">Playstation</option>
          <option value="Netflix and chill">Netflix and chill</option>
        </select>
      );
    } else {
      return null;
    }
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.myName && formData.toName && formData.message && formData.where && formData.selectedOption && formData.email) {
      navigate('/send', { state: { formData } });
    } else {
      alert('Please fill in all fields');
    }
  }


  return (
    <div>
      <FormTitle>Would you like</FormTitle>
      <FormP>Would you want to do this or that</FormP>
      <FormTo onSubmit={handleSubmit}>

        <TextCont>
          Where:
          <label htmlFor="whereOut">

            <input
              type="radio"
              id="whereOut"
              name="where"
              value="out"
              checked={formData.where === 'out'}
              onChange={handleInputChange}
              required
            />
            Out
          </label>

          <label htmlFor="whereAway">
            <input
              type="radio"
              id="whereAway"
              name="where"
              value="away"
              checked={formData.where === 'away'}
              onChange={handleInputChange}
              required
            />
            Away
          </label>

          <label htmlFor="whereHome">
            <input
              type="radio"
              id="whereHome"
              name="where"
              value="home"
              checked={formData.where === 'home'}
              onChange={handleInputChange}
              required
            />
            Home
          </label>
        </TextCont>

        {renderDropdown()}

        <TextCont>
          <LabTo htmlFor="message">Decribe your wishes</LabTo>
          <TextForm
            id="message"
            name="message"
            value={formData.message}
            onChange={handleTextChange}
            required
          />
          <CharSpan>{remainingCharacters}</CharSpan>
        </TextCont>

        <div>
          <LabTo htmlFor="myName">Your name:</LabTo>
          <InpTo
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
          <LabTo htmlFor="toName">To Name:</LabTo>
          <InpTo
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
          <LabTo htmlFor="email">Email:</LabTo>
          <InpTo
            type="email"
            id="email"
            name="email"
            placeholder='E-mail'
            value={formData.email}
            onChange={handleInputChange}
            autoComplete='email'
          />
        </div>

        <button type="submit">Submit</button>
      </FormTo>
    </div>
  );
};

export default FormToLove;
