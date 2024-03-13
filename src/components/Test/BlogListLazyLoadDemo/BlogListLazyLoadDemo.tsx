import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BlogListDemo } from "./type";
import { Post } from "./Post";

const BlogListLazyLoadDemo = () => {
  const [postList, setPostList] = useState<BlogListDemo[]>();
  console.log("🚀: ~ postList:", postList);

  const fetchPost = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    return res.data;
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
    queryKey: ["posts"],
    queryFn: fetchPost,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  useEffect(() => {
    setPostList(data?.pages[0]);
  }, [data?.pages]);

  const loadingRender = () => {
    <p>Loading...</p>;
  };

  const errorRender = () => {
    <p>Error: {error?.message}</p>;
  };

  const postRender = (post: BlogListDemo) => {
    return <Post post={post} />;
  };

  return (
    <>
      {status === "pending" && loadingRender()}
      {status === "error" && errorRender()}
      <VStack
        alignItems="start"
        overflow="hidden"
        overflowY="scroll"
        maxH="100vh"
        py="24px"
        gap="16px"
      >
        {postList?.map((post) => {
          return <Post post={post} />;
        })}
      </VStack>
    </>
  );
};

export default BlogListLazyLoadDemo;
