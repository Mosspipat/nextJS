/* eslint-disable react/display-name */
import { Box, VStack } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, {
  Suspense,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { BlogProps, QueryTanProps } from "./type";
import { Post } from "./Post";
import { PredLoading } from "@/components/PredLoading/PredLoading";
import { useInView } from 'react-intersection-observer';


const BlogListLazyLoadDemo = forwardRef((props, ref) => {
  const [postList, setPostList] = useState<BlogProps[]>();

  const perPage = 10;

  const fetchPost = async (props: QueryTanProps) => {
    console.log("🚀: ~ pageParam:", props.pageParam);
    const res = await axios(
      `https://jsonplaceholder.typicode.com/posts?_page=${props.pageParam}&_limit=${perPage}`
    );
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
    getNextPageParam: (lastPage, pages) => {
      // console.log(pages);
      return pages.length + 1;
    },
  });

  useEffect(() => {
    const allPost = data?.pages.flat();
    setPostList(allPost);
  }, [data]);

  const loadingRender = () => {
    return PredLoading();
  };

  const errorRender = () => {
    return <p>Error: {error?.message}</p>;
  };

  const postRender = (post: BlogProps) => {
    return <Post post={post} />;
  };

  const { ref:inViewRef, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(()=>{
    if(hasNextPage){
      fetchNextPage()
    }
  },[inView])

  useImperativeHandle(ref, () => ({
    gotoBackPage() {
      console.log("back page");
    },
    gotoNextPage() {
      // console.log("next page");
      fetchNextPage();
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
          {postList?.map((post,index) => {
            return <Post key={index} post={post} />;
          })}
          <Box ref={inViewRef} width='100%'>
            {isFetchingNextPage && <PredLoading/>}
            </Box>
        </Suspense>
      </VStack>
    </>
  );
});

export default BlogListLazyLoadDemo;
