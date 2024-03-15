/* eslint-disable react-hooks/exhaustive-deps */
import { Box, HStack, Image as ChakraImage, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { COLORS } from "@/constant";
import { DetailPost } from "@/mock";
import { useRouter } from "next/navigation";
import { css } from "@emotion/react";
import Resizer from "react-image-file-resizer";
import { getImageFileType } from "@/util";
import { ImageOptimize } from "../ImageOptimize";
import { PredLoading } from "../PredLoading/PredLoading";


const BlogItem = (props: DetailPost) => {
  const { id, title, content ,imagePath  } = props;

  const [optimizedImage, setOptimizedImage] = useState<Blob | string | ProgressEvent<FileReader>>();

  const router = useRouter();

  const handleOnClick = (id: number) => {
    router.push(`/blog/detail/${id}`);
    // router.refresh();
  };

  const [resizedImage, setResizedImage] = useState<string | Blob | ProgressEvent<FileReader>>();


  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      setWidth(img.naturalWidth);
      setHeight(img.naturalHeight);
    };

    // Cleanup function to remove event listener and avoid memory leaks
    return () => {
      img.onload = null;
    };
  }, [imagePath]); 

  //make to util optimize image
  useEffect(() => {
    (async () => {
      const imageFile = await getImageFileType(imagePath);
      const resizeImage = (imageFile: Blob) => {
        Resizer.imageFileResizer(
          imageFile,
          width/10, // Width
          height/10, // Height
          'WEBP', // Format
          100, // Quality
          0, // Rotation
          (resizedImage) => {
            setResizedImage(resizedImage);
          },
          'base64', // Type
          200, // Min width
          200 // Min height
        );
      };
      resizeImage(imageFile as Blob); // Call the resizeImage function here
    })();
  }, [width,height]);

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
          <ImageOptimize imagePath={imagePath} preloadRender={<PredLoading/>} resizeFactor={10} qualityPercent={100}/>
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


export default BlogItem