import styled from "styled-components";

export const CaptureDiv = styled.div`
  align-self: center;
`;

export const CaptureButton = styled.button`
  position: relative;
  background-color: #FBCAD6;
  color: #FF7676;
  width: 200px;
  padding: 6px;
  font-size: 15px;
  font-family: Limelight;
  font-weight: 700;
  letter-spacing: 4px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  margin: 18% 0;
  align-self: center;

  &:hover {
    color: #FF7676;
    box-shadow: 4px 4px 10px #fa8c8c;
  }

  &:hover::before {
    content: "Press the button to make a print-screen and save this letter. Don't forget to send the answer to your date ❤️";
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.963);
    width: 300px; 
    padding: 15px;
    border-radius: 10px;
    font-size: 16px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    color: #333;
    letter-spacing: 0px;
    line-height: 20px;
    white-space: pre-line;
    word-wrap: break-word; 
    z-index: 1;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 10px 10px 0;
    border-color: rgba(255, 255, 255, 0.8) transparent transparent;
  }
`;