import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { COLORS } from "@/constant";
import { DetailPost } from "@/mock";
import { useRouter } from "next/navigation";
import { Global, css } from "@emotion/react";

export const BlogItem = (props: DetailPost) => {
  const { id, title, author, content, dateCreated ,image } = props;

  const router = useRouter();

  const handleOnClick = (id: number) => {
    router.push(`/blog/detail/${id}`);
    // router.refresh();
  };

  useEffect(() => {}, []);

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
      minH='260px'
      pb={6}
      alignItems="start"
      borderRadius={`0px 0px 20px 20px`}
      border="0px solid rgba(0,0,0,0.2)"
      boxShadow="10px 10px 10px rgba(0,0,0,0.6)"
      transition="all 0.3s ease-out"
      _hover={{
        transform: `scale(1.1)`,
        cursor: "pointer",
        "& > *": {
          color: "black",
        },
      }}
      onClick={() => handleOnClick(id)}
    >
      <VStack gap={1} alignItems="start">
        <Box>
          <Image src={image}  maxW={500} minH={400} objectFit='cover'/>
        </Box>
        <Stack px={6} >
        <HStack pt={4}>
          <Text 
          style={{ fontWeight: 'bold', borderBottom: '2px solid black'}}
          fontWeight="bold">{title}</Text>
        </HStack>
        <Box>
          <Text
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
            width={60}
            color={COLORS.COLOR_CONTRASTS.QUATERNARY_COLOR.DarkGray}
          >
            {content}
          </Text>
        </Box>
        </Stack>
      </VStack>
    </VStack>
  );
};
