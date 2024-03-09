/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { BlogDetail } from "@/components/BlogDetail";
import { DetailPost } from "@/mock";
import { getBlogDetail } from "@/service";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

const page = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<DetailPost>();

  useEffect(() => {
    (async () => {
      const data = await getBlogDetail(params.id);
      setData(data);
    })();
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {data && <BlogDetail {...data} />}
      </Suspense>
    </div>
  );
};

export default page;
