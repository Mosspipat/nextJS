/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Banner } from "@/components/Banner";
import { BlogList } from "@/components/BlogList";
import { COLORS } from "@/constant";
import { DetailPost } from "@/mock";
import { getBlogs } from "@/service";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const page = () => {
  const [dataPosts, setDataPosts] = useState<DetailPost[] | undefined>();

  useEffect(() => {
    (async () => {
      const dataBlogs = await getBlogs();
      setDataPosts(dataBlogs);
      console.log("🚀: ~ dataBlogs:", dataBlogs);
    })();
  }, []);

  return (
    <Box>
      <Banner />
      <BlogList blogList={dataPosts} />
    </Box>
  );
};

export default page;
