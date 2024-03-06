import { AuthPanel } from "@/components/AuthPanel";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex h="100vh" alignItems="center">
      <AuthPanel />
    </Flex>
  );
}
