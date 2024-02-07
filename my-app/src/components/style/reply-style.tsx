import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export const FormLetter = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-color: #FBFBFB;
  width: 470px;
  height: 600px;
  box-shadow: 0 8px 20px rgba(27, 0, 229, 0.512);
`;

export const FormTitle = styled.h4`
font-family: Limelight;
  font-size: 35px;
  font-weight: 300;
  margin: 40px 0 0 50px;
  color: #FF7676;
`

export const FormTo = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  padding-top: 50px;
`
export const LabTo = styled.label`
  display: flex;
  flex-direction: column;

  margin: 4px auto;
`
export const InpTo = styled.input`
  width: 280px;
  margin: 0 auto;
  padding: 6px;
  background-color: #FBCAD6;
  border-radius: 8px;
  border: none;
  color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 100;


  &::placeholder {
  color: #ffffff67; 
}
`