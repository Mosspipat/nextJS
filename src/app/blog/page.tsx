/* eslint-disable @tanstack/query/no-rest-destructuring */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Banner } from "@/components/Banner";
import { BlogList } from "@/components/BlogList";
import { COLORS } from "@/constant";
import { DetailPost } from "@/mock";
import { getBlogs } from "@/service";
import { Box, Button } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const page = () => {
  const [dataPosts, setDataPosts] = useState<DetailPost[] | undefined>();

  // useEffect(() => {
  //   (async () => {
  //     const dataBlogs = await getBlogs({ currentPage: 1, itemPerPage: 4 });
  //     setDataPosts(dataBlogs);
  //   })();
  // }, []);

  const getPostData = async (props) => {
    console.log("🚀: ~ pageParam:", props.pageParam);
    const dataBlogs = await getBlogs({
      currentPage: props.pageParam,
      itemPerPage: 5,
    });
    return dataBlogs;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["postRequest"],
    queryFn: getPostData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });

  useEffect(() => {
    const allPost = data?.pages.flat();
    setDataPosts(allPost);
  }, [data]);

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
      <Button onClick={() => fetchNextPage()}>next BLogs</Button>
    </Box>
  );
};

export default page;
