import { COLORS } from "@/constant";
import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BlogPostProps } from "./type";

export const BlogDetail = (props: BlogPostProps) => {
  const { id, author, content, dateCreated } = props;
  return (
    <VStack
      px={16}
      py={16}
      alignItems="start"
      border="3px solid red"
      borderRadius={80}
      m={4}
      backgroundColor={COLORS.SECONDARY_COLOR}
      gap={4}
    >
      <Box>
        <Text color="red" fontWeight="bold" fontSize={32}>
          id:
          {id}
        </Text>
      </Box>
      <Box>
        <Text color="white" fontWeight="bold">
          author:
        </Text>
        <Text color="white">{author}</Text>
      </Box>
      <Box>
        <Text color="white" fontWeight="bold">
          content:
        </Text>
        <Text color="white">{content}</Text>
      </Box>
      <Box>
        <Text color="white" fontWeight="bold">
          dateCreated:
        </Text>
        <Text color="white">{dateCreated}</Text>
      </Box>
    </VStack>
  );
};
