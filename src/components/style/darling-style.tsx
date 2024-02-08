
import styled from 'styled-components';

export const LetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10vh;
`;

export const Letter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FBFBFB;
  width: 470px;
  height: 600px;
  box-shadow: 0 8px 20px rgba(27, 0, 229, 0.512);
`;

export const LetTitle = styled.h1`
font-family: Limelight;
  font-size: 55px;
  font-weight: 300;
  margin: 80px 0 0 50px;
  color: #FF7676;
`

export const LetP = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin: 40px 50px;
  color: #FF7676;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: -21%;
  margin-top: 30px;
`;

export const ButtOne = styled.div`
margin: 18px;
`;

export const ButtTwo = styled.div`
 margin: 18px;
`;

export const YesButton = styled.button`
  background-color: #FBCAD6;
  color: #FF7676;
  width: 100px;
  padding: 6px;
  font-size: 22px;
  font-family: Limelight;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  border: none;
  border-radius: 8px;

  &:hover {
    color: #FF7676;
    box-shadow: 4px 4px 10px #fa8c8c;
  }
`;

export const NopeButton = styled.button`
position: absolute;
  background-color: #FBCAD6;
  color: #FF7676;
  width: 100px;
  padding: 6px;
  font-size: 22px;
  font-family: Limelight;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  

  &:hover {
    color: #FF7676;
    box-shadow: 4px 4px 10px #44010c82;
  }
`;