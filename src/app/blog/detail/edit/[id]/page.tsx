"use client";
import { Banner } from "@/components/Banner";
import { COLORS } from "@/constant";
import { Box, Flex, Input, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import TextInput from "@/components/Input/TextInput/TextInput";
import { ActionButtonGroup } from "@/components/ActionButtonGroup";

const page = ({ params }: { params: { id: number } }) => {
  return (
    <Box>
      <Banner label={`Edit Post ${params?.id.toString()}`} textColor="white" />
      <FormControl>
        <VStack alignItems="start" px={10} py={10} gap={8}>
          <TextInput
            label="Title"
            type="text"
            textHelper="provide some Title of content"
          />
          <TextInput
            label="author"
            type="text"
            textHelper="provide some Title of content"
          />
          <TextInput
            label="content"
            type="text"
            textHelper="provide some Title of content"
          />
        </VStack>
        <Flex px={10} justifyContent="end">
          <ActionButtonGroup
            space={2}
            confirmOption={{
              label: "save",
              action: () => {
                console.log("click confirm");
              },
            }}
            cancelOption={{
              label: "cancel",
              action: () => {
                console.log("click cancel");
              },
            }}
          />
        </Flex>
      </FormControl>
    </Box>
  );
};

export default page;
