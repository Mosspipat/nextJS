import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { BlogItem, BlogPostProps } from "../BlogItem";

type BlogListProps = {
  blogs?: BlogPostProps[];
};

export const BlogList = (props: BlogListProps) => {
  const { blogs } = props;
  return (
    <>
      {blogs?.map((post) => {
        return <BlogItem {...post} key={post.id} />;
      })}
    </>
  );
};
