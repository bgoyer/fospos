import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const AvatarBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 35px;
  width: 35px;

  background-color: ${(props) => props.theme.colors.gray12};
  color: ${(props) => props.theme.colors.gray1};
  font-weight: 700;
  padding: 10px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
`;

const Avatar = (props) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    console.log(typeof props.children);
    if (typeof props.children === "string") {
      //calculate background color.
    }
  }, []);

  return <AvatarBase ref={ref} {...props}></AvatarBase>;
};

export default Avatar;
