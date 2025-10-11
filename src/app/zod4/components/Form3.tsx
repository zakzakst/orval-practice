"use client";

import { useState } from "react";
import type { Item } from "@/components/common/select-list";
import { SelectList } from "@/components/common/select-list";
import { Input } from "@/components/ui/input";
import type { EndTimeMark, VisitorType, Weekday } from "@/orval/big-site";

const WeekdayItems: Item<Weekday>[] = [
  {
    value: "月",
    label: "月",
  },
  {
    value: "火",
    label: "火",
  },
  {
    value: "水",
    label: "水",
  },
  {
    value: "木",
    label: "木",
  },
  {
    value: "金",
    label: "金",
  },
  {
    value: "土",
    label: "土",
  },
  {
    value: "日",
    label: "日",
  },
];

const EndTimeMarkItems: Item<EndTimeMark>[] = [
  {
    value: "●",
    label: "30分前に終了",
  },
  {
    value: "▲",
    label: "1時間前に終了",
  },
  {
    value: "■",
    label: "2時間前に終了",
  },
];

const VisitorItems: Item<VisitorType>[] = [
  {
    value: "商談",
    label: "商談",
  },
  {
    value: "一般",
    label: "一般",
  },
  {
    value: "商談/一般",
    label: "商談/一般",
  },
];

export const Form = () => {
  const [startWeekday, setStartWeekday] = useState<Weekday>();
  const [endWeekday, setEndWeekday] = useState<Weekday>();
  const [endTime, setEndTime] = useState<EndTimeMark>();
  const [visitor, setVisitor] = useState<VisitorType>();

  return (
    <div>
      {/* 展示会名 */}
      <Input name="展示会名" />
      {/* 会期(開始) */}
      {/* 開始曜日 */}
      <SelectList<Weekday>
        className="w-full"
        value={startWeekday}
        items={WeekdayItems}
        onChange={setStartWeekday}
        placeholder="プレースホルダー文言"
      />
      {/* 会期(終了) */}
      {/* 終了曜日 */}
      <SelectList<Weekday>
        className="w-full"
        value={endWeekday}
        items={WeekdayItems}
        onChange={setEndWeekday}
        placeholder="プレースホルダー文言"
      />
      {/* 利用施設 */}
      <Input name="利用施設" />
      {/* 開催時間 */}
      {/* 最終日の終了時刻(●:30分前に終了　▲:1時間前に終了　■:2時間前に終了) */}
      <SelectList<EndTimeMark>
        className="w-full"
        value={endTime}
        items={EndTimeMarkItems}
        onChange={setEndTime}
        placeholder="プレースホルダー文言"
      />
      {/* 来場対象者 */}
      <SelectList<VisitorType>
        className="w-full"
        value={visitor}
        items={VisitorItems}
        onChange={setVisitor}
        placeholder="プレースホルダー文言"
      />
      {/* 入場料について */}
      {/* 内容 */}
      <Input name="内容" />
      {/* 連絡先 */}
      <Input name="連絡先" />
      {/* TEL */}
      <Input name="TEL" />
      {/* URL */}
      <Input name="URL" />
    </div>
  );
};
