/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { BlogList } from "@/compoents/BlogList";
import { COLORS } from "@/constant";
import { PostType } from "@/mock/dataPost";
import { getBlogs } from "@/service";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const page = () => {
  const [dataPosts, setDataPosts] = useState<PostType[] | undefined>();

  useEffect(() => {
    (async () => {
      const dataBlogs = await getBlogs();
      setDataPosts(dataBlogs);
      console.log("🚀: ~ dataBlogs:", dataBlogs);
    })();
  }, []);

  return (
    <Box>
      <Box padding={40} backgroundColor={COLORS.PRIMARY_COLOR}>
        <Text
          textAlign="center"
          fontSize={40}
          fontWeight="bold"
          letterSpacing={4}
          color="white"
        >
          Story Post Dairy
        </Text>
      </Box>
      <BlogList blogs={dataPosts} />
    </Box>
  );
};

export default page;
