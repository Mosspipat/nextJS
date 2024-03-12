import { Box, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

type TextInputProps = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  textHelper: string;
};

const TextInput = (props: TextInputProps) => {
  const { label, textHelper, type } = props;
  return (
    <Box width="full">
      <FormLabel>{label}</FormLabel>
      <Input type={type} />
      <FormHelperText>{textHelper}</FormHelperText>
    </Box>
  );
};

export default TextInput;
