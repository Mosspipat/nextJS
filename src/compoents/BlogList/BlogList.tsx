import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { BlogPost, BlogPostProps } from "../BlogPost";

type BlogListProps = {
  blogs?: BlogPostProps[];
};

export const BlogList = (props: BlogListProps) => {
  const { blogs } = props;
  return (
    <>
      {blogs?.map((post) => {
        return <BlogPost {...post} key={post.id} />;
      })}
    </>
  );
};
