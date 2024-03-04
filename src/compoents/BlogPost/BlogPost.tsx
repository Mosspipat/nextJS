import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { BlogPostProps } from ".";

export const BlogPost = (props: BlogPostProps) => {
  const { id, nameAuthor, content, dateCreated } = props;
  return (
    <VStack>
      <Box>id:{id}</Box>
      <Box>nameAuthor:{nameAuthor}</Box>
      <Box>content:{content}</Box>
      <Box>dateCreated{dateCreated}</Box>
    </VStack>
  );
};
