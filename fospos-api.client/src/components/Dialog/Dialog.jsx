import React from "react";
import styled from "styled-components";
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog";

const Dialog = ({
  children,
  open = false,
  onOpenChange = () => null,
  trigger,
  title,
  description,
}) => {
  console.log(open);
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <DialogOverlay />
        <DialogContent>
          {title && <DialogTitle>{title}</DialogTitle>}
          <DialogDescription>{description}</DialogDescription>
          {children}
        </DialogContent>
      </Portal>
    </Root>
  );
};

export default Dialog;

const DialogContent = styled(Content)`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;

  max-width: 90%;
  max-height: 90%;
  background-color: ${(props) => props.theme.colors.gray1};
`;
const DialogDescription = styled(Description)``;
const DialogOverlay = styled(Overlay)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.45;
  background-color: ${(props) => props.theme.colors.gray3};
`;
const DialogTitle = styled(Title)``;
