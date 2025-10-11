"use client";

import { useEffect } from "react";
import { usePostBigSite } from "@/orval/big-site";

const Page = () => {
  const { data, isMutating, trigger } = usePostBigSite();

  useEffect(() => {
    trigger({});
  }, [trigger]);

  return (
    <div>
      <div>{JSON.stringify(isMutating)}</div>
      <div>{JSON.stringify(data?.data)}</div>
      <button type="button" onClick={() => trigger({})}>
        test
      </button>
    </div>
  );
};

export default Page;
