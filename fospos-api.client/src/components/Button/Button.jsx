import { forwardRef } from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.gray12};
  color: ${(props) => props.theme.colors.gray1};
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const ButtonBasic = styled(ButtonBase)`
  background-color: ${(props) => props.theme.colors.gray5};
  color: ${(props) => props.theme.colors.gray12};
  &:hover {
    background-color: ${(props) => props.theme.colors.gray6};
  }
`;

const BlueButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.colors.blue11};
  color: ${(props) => props.theme.colors.gray1};
  &:hover {
    background-color: ${(props) => props.theme.colors.blue12};
  }
`;

const GreenButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.colors.green11};
  color: ${(props) => props.theme.colors.gray1};
  &:hover {
    background-color: ${(props) => props.theme.colors.green12};
  }
`;

const RedButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.colors.red11};
  color: ${(props) => props.theme.colors.gray1};
  &:hover {
    background-color: ${(props) => props.theme.colors.red12};
  }
`;

const Button = forwardRef(({ color = "base", children, ...props }, ref) => {
  const Component =
    color === "red"
      ? RedButton
      : color === "blue"
      ? BlueButton
      : color === "green"
      ? GreenButton
      : ButtonBasic;
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
});

export default Button;
