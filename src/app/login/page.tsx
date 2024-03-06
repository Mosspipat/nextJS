"use client";
import React from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { AuthPanel } from "./AuthPanel";

const page = () => {
  return (
    <Box>
      <AuthPanel />
    </Box>
  );
};

export default page;
