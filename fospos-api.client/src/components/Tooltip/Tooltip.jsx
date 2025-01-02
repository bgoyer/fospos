import React from "react";
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";
import styled from "styled-components";

const TooltipDemo = ({
  trigger,
  children,
  open,
  side = "top",
  sideOffset = 5,
  onOpenChange,
}) => {
  return (
    <Provider>
      <Root open={open} onOpenChange={onOpenChange}>
        <Trigger asChild>{trigger}</Trigger>
        <Portal>
          <TooltipContent sideOffset={sideOffset} side={side}>
            {children}
            <TooltipArrow />
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  );
};

export default TooltipDemo;

const TooltipContent = styled(Content)`
  background-color: ${(props) => props.theme.colors.gray12};
  color: ${(props) => props.theme.colors.gray1};
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const TooltipArrow = styled(Arrow)`
  fill: ${(props) => props.theme.colors.gray12};
`;
