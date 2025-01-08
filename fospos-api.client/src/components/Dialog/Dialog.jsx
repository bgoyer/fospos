import React from "react";
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog";
import "./styles.css";

const Dialog = ({
  children,
  open = false,
  onOpenChange = () => null,
  trigger,
  title,
  description,
}) => {
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

const DialogContent = styled(Content)``;
const DialogDescription = styled(Description)``;
const DialogOverlay = styled(Overlay)``;
const DialogTitle = styled(Title)``;
