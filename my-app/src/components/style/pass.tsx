
import styled from 'styled-components';
import BgHearts from '../../assets/bg-heart.svg';

export const InputContainer = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BgHeart = styled.div`
 width: 200px; 
  height: 200px; 
  background-image: url('${BgHearts}');
  background-size: contain; 
  background-repeat: no-repeat;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  padding-top: 48px;
`
export const Lab = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`
export const Inp = styled.input`
  max-width: 120px;
  margin: 0 auto;
  padding: 8px;
  background-color: #FBCAD6;
  border-radius: 8px;
  border: none;
  color: #fff;
  font-size: 16px;
  letter-spacing: 4px;
  font-weight: 100;
  text-align: center;

  &::placeholder {
  color: #ffffff67; 
  text-align: center;
}
`

export const Button = styled.button`
  background-color: #FBCAD6;
  color: #fff;
  padding: 6px 8px;
  font-size: 16px;
  font-family: Limelight;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 10px #FF7676;
  margin: 8px;

  &:hover {
    color: #FF7676;
  }
`;