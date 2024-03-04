import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BlogPostProps } from ".";
import { COLORS } from "@/constant";

export const BlogPost = (props: BlogPostProps) => {
  const { id, author, content, dateCreated } = props;
  return (
    <VStack
      p={8}
      alignItems="start"
      border="1px solid red"
      borderRadius={24}
      m={4}
      backgroundColor={COLORS.SECONDARY_COLOR}
      gap={4}
    >
      <Box>
        <Text color="red" fontWeight="bold">
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
