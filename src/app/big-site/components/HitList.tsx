"use client";

import type { ResponseHit } from "@/orval/big-site";

type Props = {
  hits: ResponseHit[];
};

export const HitList = ({ hits }: Props) => {
  if (!hits.length)
    return <div>条件に合致するデータが見つかりませんでした</div>;

  return (
    <ul>
      {hits.map((hit) => (
        <li key={hit.row}>{hit.展示会名}</li>
      ))}
    </ul>
  );
};
