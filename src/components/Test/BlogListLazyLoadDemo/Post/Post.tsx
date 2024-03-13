import React from "react";
import { Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { BlogListDemo } from "../type";

type PostProps = {
  post: BlogListDemo;
};

export const Post = ({ post }: PostProps) => {
  return (
    <Stack
      key={post.id}
      border="4px solid blue"
      borderRadius="40px"
      p={6}
      alignItems="start"
      justifyContent="start"
      width="100%"
    >
      <Flex gap={2}>
        <Text fontSize={16} fontWeight="bold">
          user id:
        </Text>
        <Text>{post.userId}</Text>
      </Flex>
      <Flex gap={2}>
        <Text fontSize={16} fontWeight="bold">
          id:
        </Text>
        <Text>{post.id}</Text>
      </Flex>
      <Flex gap={2}>
        <Text fontSize={16} fontWeight="bold">
          title:
        </Text>
        <Text>{post.title}</Text>
      </Flex>
    </Stack>
  );
};
