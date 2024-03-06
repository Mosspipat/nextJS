/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { BlogDetail } from "@/components/BlogDetail";
import { DetailPost } from "@/mock";
import { getBlogDetail } from "@/service";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { id: number } }) => {

  const [data, setData] = useState<DetailPost>();

  useEffect(() => {
    (async () => {
      const data = await getBlogDetail(params.id);
      setData(data);
    })();
  }, []);

  return <>{data && <BlogDetail {...data} />}</>;
};

export default page;
