
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
  justify-content: center;
  align-items: center;
  background-color: #FBFBFB;
  width: 500px;
  height: 600px;
`;

export const YesButton = styled.button`
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
  margin: 8px;

  &:hover {
    color: #FF7676;
    box-shadow: 4px 4px 10px #44010c82;
  }
`;

export const NopeButton = styled.button`
position: absolute;
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
  margin: 8px;

  &:hover {
    color: #FF7676;
    box-shadow: 4px 4px 10px #44010c82;
  }
`;