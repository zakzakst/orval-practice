"use client";

import { useEffect } from "react";
import { usePostBigSite } from "@/orval/big-site";
import { HitList } from "./components/HitList";

const Page = () => {
  const { data, isMutating, trigger } = usePostBigSite();

  useEffect(() => {
    trigger({});
  }, [trigger]);

  return (
    <div>
      <div>{JSON.stringify(isMutating)}</div>
      {/* <div>{JSON.stringify(data?.data.hits)}</div> */}
      {data?.data.hits && <HitList hits={data.data.hits} />}
      <button
        type="button"
        className="w-full"
        onClick={() =>
          trigger({
            sortOrder: "asc",
          })
        }
      >
        test
      </button>
    </div>
  );
};

export default Page;
