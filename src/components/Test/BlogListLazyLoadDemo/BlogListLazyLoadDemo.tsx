import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, {
  Suspense,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { BlogProps } from "./type";
import { Post } from "./Post";
import { PredLoading } from "@/components/PredLoading/PredLoading";

const BlogListLazyLoadDemo = forwardRef((props, ref) => {
  const [postList, setPostList] = useState<BlogProps[]>();

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
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  useEffect(() => {
    setPostList(data?.pages[0]);
  }, [data?.pages]);

  const loadingRender = () => {
    return PredLoading();
  };

  const errorRender = () => {
    return <p>Error: {error?.message}</p>;
  };

  const postRender = (post: BlogProps) => {
    return <Post post={post} />;
  };

  useImperativeHandle(ref, () => ({
    gotoBackPage() {
      alert("back page");
    },
    gotoNextPage() {
      alert("next page");
    },
  }));

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
        <Suspense fallback={<PredLoading />}>
          {postList?.map((post) => {
            return <Post post={post} />;
          })}
        </Suspense>
      </VStack>
    </>
  );
});

export default BlogListLazyLoadDemo;
