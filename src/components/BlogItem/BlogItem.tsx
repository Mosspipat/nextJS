import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "@/constant";
import { DetailPost } from "@/mock";
import { title } from "process";

export const BlogItem = (props: DetailPost) => {
  const { id, title, author, content, dateCreated } = props;

  const handleOnClick = (id: number) => {
    console.log("click:", id);
  };

  return (
    <VStack
      px={6}
      py={6}
      alignItems="start"
      borderRadius={20}
      border="1px solid rgba(0,0,0,0.1)"
      // backgroundColor={COLORS.SECONDARY_COLOR}
      boxShadow="10px 10px 10px rgba(0,0,0,0.2)"
      transition="all 0.3s ease-out"
      _hover={{
        transform: `scale(1.1)`,
        cursor: "pointer",
      }}
      onClick={() => handleOnClick(id)}
    >
      <Box>
        <Text color="black" fontWeight="bold">
          Title:
        </Text>
        <Text color="black" width={200}>
          {title}
        </Text>
      </Box>
      <Box>
        <Text color="black" fontWeight="bold">
          dateCreated:
        </Text>
        <Text color="black">{dateCreated}</Text>
      </Box>
    </VStack>
  );
};
