import { Box } from "@chakra-ui/react";
import Lottie from "react-lottie";
import loadingAnimation from "../../lotties/loading-animation.json";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const checkDocumentLoading = () => {
    if (typeof document !== "undefined") {
      // Your client-side code using document goes here
      return "loading client..";
    } else {
      return "loading app...";
    }
  };

  return <Box>{checkDocumentLoading()}</Box>;
}
