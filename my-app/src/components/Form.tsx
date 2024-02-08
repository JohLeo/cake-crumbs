import React, { useState } from 'react';
import { FormTitle, FormTo, FormP, LabTo, InpTo, TextCont, TextForm, CharSpan } from './style/reply-style';

interface FormData {
  myName: string;
  toName: string;
  message: string;
  where: string;
  options: string[];
  selectedOption: string;
  email: string;
}

const FormToLove: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    myName: '',
    toName: '',
    message: '',
    where: '',
    options: [],
    selectedOption: '',
    email: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (option: string) => {
    const updatedOptions = [...formData.options];
    const index = updatedOptions.indexOf(option);
    if (index === -1) {
      updatedOptions.push(option);
    } else {
      updatedOptions.splice(index, 1);
    }
    setFormData({
      ...formData,
      options: updatedOptions,
    });
  };


  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic needed to handle form submission
  };



  return (
    <div>
      <FormTitle>Would you like</FormTitle>
      <FormP>Would you want to do this or that</FormP>
      <FormTo onSubmit={handleSubmit}>

        <div>
          <LabTo>Where:</LabTo>
          <label>
            <input
              type="radio"
              name="where"
              value="out"
              checked={formData.where === 'out'}
              onChange={handleInputChange}
            />{' '}
            Out
          </label>

          <label>
            <input
              type="radio"
              name="where"
              value="away"
              checked={formData.where === 'away'}
              onChange={handleInputChange}
            />{' '}
            Away
          </label>

          <label>
            <input
              type="radio"
              name="where"
              value="home"
              checked={formData.where === 'home'}
              onChange={handleInputChange}
            />{' '}
            Home
          </label>
        </div>

        <div>
          <p>Options:</p>
          <label>
            <input
              type="checkbox"
              name="option1"
              checked={formData.options.includes('option1')}
              onChange={() => handleCheckboxChange('option1')}
            />{' '}
            Option 1
          </label>

          <label>
            <input
              type="checkbox"
              name="option2"
              checked={formData.options.includes('option2')}
              onChange={() => handleCheckboxChange('option2')}
            />{' '}
            Option 2
          </label>

          <label>
            <input
              type="checkbox"
              name="option3"
              checked={formData.options.includes('option3')}
              onChange={() => handleCheckboxChange('option3')}
            />{' '}
            Option 3
          </label>
        </div>


        <div>
          <LabTo htmlFor="dropdown">Select an option:</LabTo>
          <select
            id="dropdown"
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <TextCont>
          <LabTo htmlFor="message">Decribe your wishes</LabTo>
          <TextForm
            id="message"
            name="message"
            value={formData.message}
            onChange={handleTextChange}
          />
          <CharSpan>{remainingCharacters}</CharSpan>
        </TextCont>

        <div>
          <LabTo htmlFor="myName">Your name:</LabTo>
          <InpTo
            type="text"
            id="Name"
            name="Name"
            placeholder='Name'
            value={formData.myName}
            onChange={handleInputChange}
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
          />
        </div>

        <button type="submit">Submit</button>
      </FormTo>
    </div>
  );
};

export default FormToLove;
