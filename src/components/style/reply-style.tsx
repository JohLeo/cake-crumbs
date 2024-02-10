import styled from "styled-components";


// generall containers
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

// basic styling for the letter
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
  margin: 44px 0 0 50px;
  color: #FF7676;
`

// styled paragraphs
export const FormP = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin: 15px 50px;
  color: #FF7676;
`

export const FormInfo = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #FF7676;
  margin: 5px 10px 0 0;
`

// form styling
export const FormTo = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 52px;
  color: #FF7676;
  font-weight: 300;
`
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 10px 0 2px 0;
`
export const NameInput = styled.input`
  width: 280px;
  margin: 0;
  padding: 6px 8px 5.5px 8px;
  background-color: #FBCAD6;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 400;
  outline: none;

  &::placeholder {
  color: #ffffff67; 
}
`

export const TimeInput = styled.input`
  width: 280px;
  padding: 3px 6px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  background-color: #FBCAD6;
  letter-spacing: 2px;
  font-family: 'Josefin Sans', sans-serif;
`;

// radio buttons
export const RadioButton = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #FF7676;
  outline: none;
  margin: 3px 6px 0 0;
  
  &:checked {
    background-color: #FBCAD6;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  margin-right: 10px;
`;

// select styling
export const StyledSelect = styled.select`
  padding: 3px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  background-color: #FBCAD6;
  letter-spacing: 2px;
`;

// textarea span and button below
export const TextForm = styled.textarea`
 height: 10vh;
 padding: 8px;
 box-sizing: border-box;
 border: none;
 border-radius: 4px;
 background-color: #FBCAD6;
 color: #fff;
 font-family: 'Josefin Sans', sans-serif;
 font-size: 13px;
 resize: none;
 outline: none;
 overflow: auto;
`

export const CharSpan = styled.span`
font-size: 10px;
text-align: right;
margin: 3px 3px 0 0;
`

export const FormButton = styled.button`
  background-color: #FBCAD6;
  color: #FF7676;
  width: 130px;
  padding: 6px;
  font-size: 15px;
  font-family: Limelight;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  margin: 30px 0;
  align-self: center;

  &:hover {
    color: #FF7676;
    box-shadow: 4px 4px 10px #fa8c8c;
  }
`;