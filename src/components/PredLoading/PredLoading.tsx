"use client";
import { Box, Flex } from "@chakra-ui/react";
import loadingAnimation from "../../lotties/loading-animation.json";
import Lottie from "react-lottie";

export function PredLoading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Flex>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Flex>
  );
}
