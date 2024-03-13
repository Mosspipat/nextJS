"use client";
import BlogListLazyLoadDemo from "@/components/Test/BlogListLazyLoadDemo";
import { Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
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
      <BlogListLazyLoadDemo />
    </VStack>
  );
}
