"use client";

import { useState } from "react";
import type { Item } from "@/components/common/combobox";
import { Combobox } from "@/components/common/combobox";

type Framework = "next.js" | "sveltekit" | "nuxt.js" | "remix" | "astro";

const FrameworkItems: Item<Framework>[] = [
  {
    value: "next.js",
    label: "next.js",
  },
  {
    value: "sveltekit",
    label: "sveltekit",
  },
  {
    value: "nuxt.js",
    label: "nuxt.js",
  },
  {
    value: "remix",
    label: "remix",
  },
  {
    value: "astro",
    label: "astro",
  },
];

export const Form = () => {
  const [framework, setFramework] = useState<Framework>();
  return (
    <>
      <div className="text-my-lg text-my-primary">form</div>
      <Combobox<Framework>
        value={framework}
        items={FrameworkItems}
        onChange={setFramework}
      />
    </>
  );
};
