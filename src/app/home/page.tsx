import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Box>
      <Stack direction="row" spacing={4}>
        <Button isLoading colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          isLoading
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default page;
