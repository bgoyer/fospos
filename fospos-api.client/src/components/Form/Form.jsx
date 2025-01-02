import styled from "styled-components";

const Form = ({ actions, children, onSubmit, ...props }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <FormBase onSubmit={handleSubmit} {...props}>
      {children}
      {actions && <Actions>{actions}</Actions>}
    </FormBase>
  );
};

export default Form;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;

const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: ${(props) => props.theme.colors.gray2};
  border: 2px solid ${(props) => props.theme.colors.gray9};
  padding: 20px;
`;
