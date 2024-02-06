import React, { useState } from 'react';

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


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic needed to handle form submission
  };

  return (
    <div>
      <h1>Fill this in</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="myName">Your name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.myName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="toName">To Name:</label>
          <input
            type="text"
            id="toName"
            name="toName"
            value={formData.toName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="message">Decribe it:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Where:</label>
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
          <label htmlFor="dropdown">Select an option:</label>
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

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormToLove;
