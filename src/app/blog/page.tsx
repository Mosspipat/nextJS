/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Banner } from "@/components/Banner";
import { BlogList } from "@/components/BlogList";
import { COLORS } from "@/constant";
import { DetailPost } from "@/mock";
import { getBlogs } from "@/service";
import { Box } from "@chakra-ui/react";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

const page = () => {
  const [dataPosts, setDataPosts] = useState<DetailPost[] | undefined>();

  useEffect(() => {
    (async () => {
      const dataBlogs = await getBlogs();
      console.log("🚀: ~ dataBlogs:", dataBlogs);
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
      <Suspense fallback={<Loading />}>
        <BlogList blogList={dataPosts} />
      </Suspense>
    </Box>
  );
};

export default page;
