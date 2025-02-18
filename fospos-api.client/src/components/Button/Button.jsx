import { forwardRef } from "react";
import styled from "styled-components";

//#region Default
const ButtonBase = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
//#endregion

//#region Toggle
const ToggleButtonBase = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.gray12};
  border-radius: 5px;
  cursor: pointer;
`;

const ToggleButtonBasic = styled(ToggleButtonBase)`
  border-color: ${(props) => props.theme.colors.gray5};
  color: ${(props) => props.theme.colors.gray12};
  &:hover {
    background-color: ${(props) => props.theme.colors.gray6};
  }
`;

const ToggleBlueButton = styled(ToggleButtonBase)`
  background-color: ${(props) => props.theme.colors.blue11};
  color: ${(props) => props.theme.colors.gray1};
  &:hover {
    background-color: ${(props) => props.theme.colors.blue12};
  }
`;

const ToggleGreenButton = styled(ToggleButtonBase)`
  background-color: ${(props) => props.theme.colors.green11};
  color: ${(props) => props.theme.colors.gray1};
  &:hover {
    background-color: ${(props) => props.theme.colors.green12};
  }
`;

const ToggleRedButton = styled(ToggleButtonBase)`
  background-color: ${(props) => props.theme.colors.red11};
  color: ${(props) => props.theme.colors.gray1};
  &:hover {
    background-color: ${(props) => props.theme.colors.red12};
  }
`;
//#endregion

const normalButtonMap = {
  red: RedButton,
  blue: BlueButton,
  green: GreenButton,
  base: ButtonBasic,
};

const toggleButtonMap = {
  red: ToggleRedButton,
  blue: ToggleBlueButton,
  green: ToggleGreenButton,
  base: ToggleButtonBasic,
};

const Button = forwardRef(
  ({ color = "base", children, toggle = false, ...props }, ref) => {
    const Component = toggle
      ? toggleButtonMap[color] || ToggleButtonBasic
      : normalButtonMap[color] || ButtonBasic;
    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

export default Button;
