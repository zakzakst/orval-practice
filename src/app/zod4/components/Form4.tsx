"use client";

import { useState } from "react";
import { z } from "zod";
import type { Item } from "@/components/common/radio-label-group";
import { RadioLabelGroup } from "@/components/common/radio-label-group";

// 無料
// - 要登録（チェックボックス）
// - 補足（テキストボックス）
// 有料
// - 値段（テキストボックス 必須）
// - 前売あり（チェックボックス）
// - 事前登録者無料（チェックボックス）
// - 招待券持参者無料（チェックボックス）
// - 補足（テキストボックス）
// 未定
// その他
// - 補足（テキストボックス 必須）

const PriceType = {
  free: "無料",
  paid: "有料",
  undecided: "未定",
  others: "その他",
} as const;

type PriceTypeValue = (typeof PriceType)[keyof typeof PriceType];

const PriceTypeItems: Item<PriceTypeValue>[] = [
  {
    value: "無料",
    label: "無料",
  },
  {
    value: "有料",
    label: "有料",
  },
  {
    value: "未定",
    label: "未定",
  },
  {
    value: "その他",
    label: "その他",
  },
];

const priceFreeSchema = z.object({
  type: z.literal(PriceType.free),
  note: z.string().optional(),
});
const pricePaidSchema = z.object({
  type: z.literal(PriceType.paid),
  note: z.string().optional(),
});
const priceUndecidedSchema = z.object({ type: z.literal(PriceType.undecided) });
const priceOthersSchema = z.object({
  type: z.literal(PriceType.others),
  note: z.string().min(1),
});

const priceSchema = z.object({
  price: z.discriminatedUnion("type", [
    priceFreeSchema,
    pricePaidSchema,
    priceUndecidedSchema,
    priceOthersSchema,
  ]),
});

export const Form = () => {
  const [priceType, setPriceType] = useState<PriceTypeValue>();
  return (
    <div>
      <RadioLabelGroup<PriceTypeValue>
        value={priceType}
        items={PriceTypeItems}
        onChange={setPriceType}
      />
      {priceType === "無料" && <div>無料用の入力フォーム</div>}
      {priceType === "有料" && <div>有料用の入力フォーム</div>}
      {priceType === "未定" && <div>未定用の入力フォーム</div>}
      {priceType === "その他" && <div>その他用の入力フォーム</div>}
    </div>
  );
};
