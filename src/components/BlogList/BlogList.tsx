import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { BlogItem } from "../BlogItem";
import { DetailPost } from "@/mock";

type BlogListProps = {
  blogList?: DetailPost[];
};

export const BlogList = (props: BlogListProps) => {
  const { blogList } = props;
  return (
    <>
      <HStack overflow="auto" py="100px" px={4} gap={16}>
        {blogList?.map((post) => {
          return <BlogItem {...post} key={post.id} />;
        })}
      </HStack>
    </>
  );
};
