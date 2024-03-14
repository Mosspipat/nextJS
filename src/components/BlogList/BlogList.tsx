/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import { HStack } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { DetailPost } from "@/mock";
import { PredLoading } from "../PredLoading/PredLoading";

type BlogListProps = {
  blogList?: DetailPost[];
};

export const BlogList = (props: BlogListProps) => {
  const { blogList } = props;

  const LazyBlogCard = React.lazy(
    () => import("@/components/BlogItem")
  );

  return (
      <HStack py="100px" px={4} gap={16} maxW="100vw" flexWrap='wrap' justifyContent='center'>
        {blogList?.map((post) => {
          return (
                <Suspense fallback={<PredLoading />}>
                  <LazyBlogCard {...post} key={post.id} />
                </Suspense>
                )
        })}
      </HStack>
  );
};
