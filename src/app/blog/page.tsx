/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Banner } from "@/components/Banner";
import { BlogList } from "@/components/BlogList";
import { COLORS } from "@/constant";
import { DetailPost } from "@/mock";
import { getBlogs } from "@/service";
import { Box } from "@chakra-ui/react";
import React, {  useEffect, useState } from "react";

const page = () => {
  const [dataPosts, setDataPosts] = useState<DetailPost[] | undefined>();

  useEffect(() => {
    (async () => {
      const dataBlogs = await getBlogs({currentPage:4,itemPerPage:3});
      setDataPosts(dataBlogs);
    })();
  }, []);

  return (
    <Box>
      <Banner
        label="Blog Post"
        textColor="white"
        backgroundColor={COLORS.PRIMARY_COLOR}
      />
      <Box>
          <BlogList blogList={dataPosts} />
      </Box>
    </Box>
  );
};

export default page;
