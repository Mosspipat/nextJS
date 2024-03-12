/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Banner } from "@/components/Banner";
import { BlogList } from "@/components/BlogList";
import { PredLoading } from "@/components/PredLoading/PredLoading";
import { COLORS } from "@/constant";
import { DetailPost } from "@/mock";
import { getBlogs } from "@/service";
import { Box } from "@chakra-ui/react";
import React, { Suspense, useEffect, useState } from "react";

const page = () => {
  const [dataPosts, setDataPosts] = useState<DetailPost[] | undefined>();

  const LazyBlogList = React.lazy(
    () => import("@/components/BlogList/BlogList")
  );

  useEffect(() => {
    (async () => {
      const dataBlogs = await getBlogs();
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
        <Suspense fallback={<PredLoading />}>
          <LazyBlogList blogList={dataPosts} />
        </Suspense>
      </Box>
    </Box>
  );
};

export default page;
