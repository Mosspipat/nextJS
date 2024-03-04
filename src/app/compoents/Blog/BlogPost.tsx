import { Box } from "@chakra-ui/react";
import React from "react";

type BlogPostProps = {
  title: string;
  content: string;
  date: string;
};

const BlogPost = (props: BlogPostProps) => {
  const { title, content, date } = props;
  return <Box>Test</Box>;
};

export default BlogPost;
