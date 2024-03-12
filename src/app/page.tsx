import { AuthPanel } from "@/components/AuthPanel";
import { Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Suspense fallback={<Loading />}>
        <AuthPanel />
      </Suspense>
    </Flex>
  );
}
