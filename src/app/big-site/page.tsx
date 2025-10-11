'use client'

import { usePostBigSite } from "@/orval/big-site";

const Page = () => {
  const {
    data,
    isMutating,
    trigger,
  } = usePostBigSite();

  return (
    <div>
      <div>{JSON.stringify(isMutating)}</div>
      <div>{JSON.stringify(data?.data)}</div>
      <button type="button" onClick={() => trigger({})}>test</button>
    </div>
  );
};

export default Page;