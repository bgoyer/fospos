import styled from "styled-components";

const Input = ({ label, ...props }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputBase type="text" {...props} />
    </InputContainer>
  );
};

export default Input;

const InputBase = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;
const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
`;
const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
`;
