import { COLORS } from "@/constant";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../Banner";
import { DetailPost } from "@/mock";
import { ActionButtonGroup } from "../ActionButtonGroup";
import { useRouter } from "next/navigation";

export const BlogDetail = (props: DetailPost) => {
  const { id, title, author, content, dateCreated } = props;
  const router = useRouter();
  return (
    <Box>
      <Banner
        label={title}
        textColor="white"
        backgroundColor={COLORS.PRIMARY_COLOR}
      />
      <VStack px={16} py={16} alignItems="start" m={4} gap={4}>
        <Box>
          <Text color="black" fontWeight="bold" fontSize={20}>
            content:
          </Text>
          <Text color="black">{content}</Text>
        </Box>
        <Box>
          <Text color="black" fontWeight="bold" fontSize={20}>
            author:
          </Text>
          <Text color="black">{author}</Text>
        </Box>
        <Box>
          <Text color="black" fontWeight="bold" fontSize={20}>
            dateCreated:
          </Text>
          <Text color="black">{dateCreated}</Text>
        </Box>
      </VStack>
      <Flex px={10} justifyContent="end">
        <ActionButtonGroup
          space={2}
          cancelOption={{
            label: "back",
            action: () => {
              console.log("back to previous page");
              router.back();
            },
          }}
          confirmOption={{
            label: "edit",
            action: () => {
              router.push(`/blog/detail/edit/${id}`);
              console.log("edit this blog");
            },
          }}
        />
      </Flex>
    </Box>
  );
};
