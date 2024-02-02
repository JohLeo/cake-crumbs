
import React, { useState } from 'react';
import {
  InputContainer,
  BgHeart,
  Form,
  Lab,
  Inp,
  Button
} from './style/pass-style';

interface PassInputProps {
  onSubmit: (password: string) => void;
}


const PasswordInput: React.FC<PassInputProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <InputContainer>
      <BgHeart>
        <Form onSubmit={handleSubmit}>
          <Lab>
            <Inp
              type="password"
              placeholder='password'
              value={password}
              onChange={handleChange}
            />
          </Lab>
          <Button type="submit">Open</Button>
        </Form>
      </BgHeart>
    </InputContainer>
  );
};

export default PasswordInput;
