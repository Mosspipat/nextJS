import { COLORS } from "@/constant";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const Banner = () => {
  return (
    <Box padding={40} backgroundColor={COLORS.PRIMARY_COLOR}>
      <Text
        textAlign="center"
        fontSize={40}
        fontWeight="bold"
        letterSpacing={4}
        color="white"
      >
        Story Post Dairy
      </Text>
    </Box>
  );
};
