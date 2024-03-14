/* eslint-disable react/display-name */
import { HStack } from "@chakra-ui/react";
import React from "react";
import { BlogItem } from "../BlogItem";
import { DetailPost } from "@/mock";

type BlogListProps = {
  blogList?: DetailPost[];
};

const BlogList = (props: BlogListProps) => {
  const { blogList } = props;

  return (
      <HStack py="100px" px={4} gap={16} maxW="100vw" flexWrap='wrap' justifyContent='center'>
        {blogList?.map((post) => {
          return <BlogItem {...post} key={post.id} />;
        })}
      </HStack>
  );
};

export default BlogList;
