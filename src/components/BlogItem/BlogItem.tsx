"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "@/constant";
import { DetailPost } from "@/mock";
import { useRouter } from "next/navigation";
import { Global, css } from "@emotion/react";

export const BlogItem = (props: DetailPost) => {
  const { id, title, author, content, dateCreated } = props;

  const router = useRouter();

  const handleOnClick = (id: number) => {
    console.log("click:", id);
    router.push(`/blog/detail/${id}`);
    // router.refresh();
  };

  const globalStyles = css`
    @keyframes mymove {
      from {
        top: 0px;
      }
      to {
        top: 200px;
      }
    }
  `;

  return (
    <VStack
      px={6}
      py={6}
      alignItems="start"
      borderRadius={20}
      border="1px solid rgba(0,0,0,0.2)"
      boxShadow="10px 10px 10px rgba(0,0,0,0.2)"
      transition="all 0.3s ease-out"
      _hover={{
        transform: `scale(1.1)`,
        cursor: "pointer",
        backgroundColor: COLORS.SECONDARY_COLOR,
        "& > *": {
          color: "white",
        },
      }}
      onClick={() => handleOnClick(id)}
    >
      <VStack gap={4} alignItems="start">
        <Box>
          <Text fontWeight="bold">Title:</Text>
          <Text width={200}>{title}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">description:</Text>
          <Text
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
            width={60}
          >
            {content}
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
};
