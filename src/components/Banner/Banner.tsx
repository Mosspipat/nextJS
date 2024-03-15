import { COLORS } from "@/constant";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

type BannerProps = {
  label?: string;
  textColor?: string;
  backgroundColor?: string;
  backgroundURL?: string;
};

export const Banner = (props: BannerProps) => {
  const {
    label = "Title",
    backgroundColor = 'white',
    backgroundURL = '',
    textColor = "color",
  } = props;
  return (
    <Box padding={40} 
    backgroundColor={backgroundColor && backgroundColor}
    backgroundImage={backgroundURL && `url(${backgroundURL})`}
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="center">
      <Text
        textAlign="center"
        fontSize={40}
        fontWeight="bold"
        letterSpacing={4}
        color={textColor}
      >
        {label}
      </Text>
    </Box>
  );
};
