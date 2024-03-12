import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ButtonProps,
} from "@chakra-ui/react";
import React from "react";

type buttonConfirmProps = ButtonProps & {
  label?: string;
  action?: () => void;
};
type buttonCancelProps = ButtonProps & {
  label?: string;
  action?: () => void;
};

type ActionButtonGroupProps = ButtonGroupProps & {
  space?: number | string;
  confirmOption?: buttonConfirmProps;
  cancelOption?: buttonCancelProps;
};

export const ActionButtonGroup = (props: ActionButtonGroupProps) => {
  const { space = 6, confirmOption, cancelOption, ...other } = props;
  return (
    <ButtonGroup variant="outline" spacing={space} {...other}>
      <Button {...cancelOption} onClick={cancelOption?.action}>
        {cancelOption?.label}
      </Button>
      <Button
        colorScheme="blue"
        {...confirmOption}
        onClick={confirmOption?.action}
      >
        {confirmOption?.label}
      </Button>
    </ButtonGroup>
  );
};
