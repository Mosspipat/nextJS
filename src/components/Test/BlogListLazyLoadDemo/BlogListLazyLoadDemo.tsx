import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export interface BlogListDemo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const BlogListLazyLoadDemo = () => {
  const [postList, setPostList] = useState<BlogListDemo[]>();

  useEffect(() => {
    (async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      const data = res.data;
      setPostList(data);
    })();
  }, []);

  return (
    <VStack
      alignItems="start"
      overflow="hidden"
      overflowY="scroll"
      maxH="100vh"
      py="24px"
      gap="16px"
    >
      {postList?.map((post) => {
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
            <Flex gap={2}>
              <Text fontSize={16} fontWeight="bold">
                complete:
              </Text>
              <Text>{post.completed}</Text>
            </Flex>
          </Stack>
        );
      })}
    </VStack>
  );
};

export default BlogListLazyLoadDemo;
