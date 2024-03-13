"use client";
import BlogListLazyLoadDemo from "@/components/Test/BlogListLazyLoadDemo";
import { Button, ButtonGroup, Text, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";

export default function Loading() {
  const childRef = useRef(null);

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
      <BlogListLazyLoadDemo ref={childRef} />
      <ButtonGroup>
        <Button
          onClick={() => {
            childRef.current.gotoBackPage();
            // handleBack();
          }}
        >
          previous page
        </Button>
        <Button
          onClick={() => {
            childRef.current.gotoNextPage();
            // handleNext();
          }}
        >
          next page
        </Button>
      </ButtonGroup>
    </VStack>
  );
}
