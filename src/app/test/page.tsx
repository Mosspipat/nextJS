"use client";
import { Flex, Text, VStack } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { PredLoading } from "@/components/PredLoading/PredLoading";

export default function Loading() {
  const LazyBlogList = React.lazy(
    () => import("@/components/Test/BlogListLazyLoadDemo")
  );

  return (
    <VStack h="100vh" py={20}>
      <Text
        fontSize="32px"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="1px"
        color="ButtonText"
        textShadow="3px 3px 3px rgba(0,0,0,0.4),8px 8px 8px rgba(0,0,0,0.4)"
      >
        lazy Load Demo
      </Text>
      <Suspense fallback={<PredLoading />}>
        <LazyBlogList />
      </Suspense>
    </VStack>
  );
}
