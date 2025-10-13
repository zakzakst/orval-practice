"use client";

import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { DatePicker } from "@/components/common/date-picker";
import type { Item } from "@/components/common/select-list";
import { SelectList } from "@/components/common/select-list";
import { Input } from "@/components/ui/input";
import type {} from "@/orval/big-site";
import { EndTimeMark, VisitorType, Weekday } from "@/orval/big-site";

// TODO: 現状だとレスポンスの型を利用しているため空文字も許容してしまう。新規追加用の型（空文字なし）を作成してフォームに利用する
const EndTimeMarkValues = Object.keys(EndTimeMark) as EndTimeMark[];
const VisitorTypeValues = Object.keys(VisitorType) as VisitorType[];
const WeekdayValues = Object.keys(Weekday) as Weekday[];

const formSchema = z.object({
  name: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
  startDate: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
  endDate: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
  facility: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
  endTime: z
    .enum(EndTimeMarkValues, {
      error: "選択肢にあった内容を入力してください",
    })
    .optional(),
  // endTime: z.enum(["●", "▲", "■"], {
  //   error: "選択肢にあった内容を入力してください",
  // }),
  startWeekday: z
    .enum(WeekdayValues, {
      error: "選択肢にあった内容を入力してください",
    })
    .optional(),
  endWeekday: z
    .enum(WeekdayValues, {
      error: "選択肢にあった内容を入力してください",
    })
    .optional(),
  visitorType: z
    .enum(VisitorTypeValues, {
      error: "選択肢にあった内容を入力してください",
    })
    .optional(),
  content: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
  contact: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
  // TODO: 電話番号の書式設定方法調べる
  tel: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
  // TODO: URLの書式設定方法調べる
  url: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
});

type FormValues = z.infer<typeof formSchema>;

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
  const { control, handleSubmit, watch } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   name: "",
    // },
  });

  const values = watch();

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div>
      <div>{JSON.stringify(values)}</div>

      {/* 展示会名 */}
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              value={field.value || ""}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="展示会名"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      {/* 会期(開始) */}
      <Controller
        name="startDate"
        control={control}
        render={({ field, fieldState: { error } }) => {
          const date = field.value ? new Date(field.value) : undefined;
          const handleOnChange = (date: Date | undefined) => {
            if (!date) {
              field.onChange(undefined);
            } else {
              field.onChange(date.toLocaleDateString());
            }
          };
          return (
            <>
              <DatePicker
                className="w-full"
                date={date}
                onChange={handleOnChange}
                placeholder="会期(開始)"
              />
              {error && <p className="text-destructive">{error.message}</p>}
            </>
          );
        }}
      />

      {/* 開始曜日 */}
      <Controller
        name="startWeekday"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <SelectList<Weekday>
              className="w-full"
              value={field.value}
              items={WeekdayItems}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="開始曜日"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      {/* 会期(終了) */}
      <Controller
        name="endDate"
        control={control}
        render={({ field, fieldState: { error } }) => {
          const date = field.value ? new Date(field.value) : undefined;
          const handleOnChange = (date: Date | undefined) => {
            if (!date) {
              field.onChange(undefined);
            } else {
              field.onChange(date.toLocaleDateString());
            }
          };
          return (
            <>
              <DatePicker
                className="w-full"
                date={date}
                onChange={handleOnChange}
                placeholder="会期(終了)"
              />
              {error && <p className="text-destructive">{error.message}</p>}
            </>
          );
        }}
      />

      {/* 終了曜日 */}
      <Controller
        name="endWeekday"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <SelectList<Weekday>
              className="w-full"
              value={field.value}
              items={WeekdayItems}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="終了曜日"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      {/* 利用施設 */}
      <Controller
        name="facility"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              value={field.value || ""}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="利用施設"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      {/* 開催時間 */}

      {/* 最終日の終了時刻(●:30分前に終了　▲:1時間前に終了　■:2時間前に終了) */}
      <Controller
        name="endTime"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <SelectList<EndTimeMark>
              className="w-full"
              value={field.value}
              items={EndTimeMarkItems}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="最終日の終了時刻"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      {/* 来場対象者 */}
      <Controller
        name="visitorType"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <SelectList<VisitorType>
              className="w-full"
              value={field.value}
              items={VisitorItems}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="来場対象者"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      {/* 入場料について */}

      {/* 内容 */}
      <Controller
        name="content"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              value={field.value || ""}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="内容"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      {/* 連絡先 */}
      <Controller
        name="contact"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              value={field.value || ""}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="連絡先"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      {/* TEL */}
      <Controller
        name="tel"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              value={field.value || ""}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="TEL"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      {/* URL */}
      <Controller
        name="url"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              value={field.value || ""}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder="URL"
            />
            {error && <p className="text-destructive">{error.message}</p>}
          </>
        )}
      />

      <div>
        <button type="button" onClick={handleSubmit(onSubmit)}>
          送信
        </button>
      </div>
    </div>
  );
};
