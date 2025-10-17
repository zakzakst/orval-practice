"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import type { Item } from "@/components/common/radio-label-group";
import { RadioLabelGroup } from "@/components/common/radio-label-group";

type PriceType = (typeof PriceType)[keyof typeof PriceType];

const PriceType = {
  無料: "無料",
  有料: "有料",
  未定: "未定",
  その他: "その他",
} as const;

const PriceTypeItems: Item<PriceType>[] = [
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
  registration: z.boolean({
    error: "選択必須項目です",
  }),
  note: z.string().optional(),
});

const pricePaidSchema = z.object({
  note: z.string().optional(),
});

const priceUndecidedSchema = z.object({
  note: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
});

const priceOthersSchema = z.object({
  note: z
    .string({
      error: "入力必須項目です",
    })
    .min(1, {
      error: "入力必須項目です",
    }),
});

// const priceSchema = z.object({
//   free: priceFreeSchema.optional(),
//   paid: pricePaidSchema.optional(),
//   undecided: priceUndecidedSchema.optional(),
//   others: priceOthersSchema.optional(),
// });

// const formSchema = z.object({
//   type: z.enum(
//     Object.values(PriceType),
//     // Object.values(PriceType) as PriceType[]
//     // Object.values(PriceType) as [PriceType, ...PriceType[]]
//     {
//       error: "選択必須項目です",
//     }
//   ),
// });

// 条件分岐後のスキーマを別のプロパティ名で保持させると上手くいった（下記のprice.freeにスキーマを設定するのでなく、priceに各スキーマを入れるとtypescriptのエラーなどが出た）
// フォームのスキーマを下記のように作成し、APIリクエスト時にデータを加工する方針にする
const formSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("無料"),
    price: z.object({
      free: priceFreeSchema,
    }),
  }),
  z.object({
    type: z.literal("有料"),
    price: z.object({
      paid: pricePaidSchema,
    }),
  }),
  z.object({
    type: z.literal("未定"),
    price: z.object({
      undecided: priceUndecidedSchema,
    }),
  }),
  z.object({
    type: z.literal("その他"),
    price: z.object({
      others: priceOthersSchema,
    }),
  }),
]);

type FormValues = z.infer<typeof formSchema>;

const PriceFormFree = () => {
  const { control } = useFormContext<FormValues>();
  return (
    <div>
      <div>PriceFormFree</div>
      <Controller
        control={control}
        name="price.free.registration"
        render={({ field, fieldState: { error } }) => (
          <div>
            <div>要登録</div>
            <div>
              <Checkbox
                checked={
                  field.value !== undefined ? field.value : "indeterminate"
                }
                onCheckedChange={(value) => {
                  if (value === "indeterminate") return;
                  field.onChange(value);
                }}
              />
            </div>
            {error && <p className="text-destructive">{error.message}</p>}
          </div>
        )}
      />
      <Controller
        control={control}
        name="price.free.note"
        render={({ field, fieldState: { error } }) => (
          <div>
            <div>補足</div>
            <div>
              <Input
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            </div>
            {error && <p className="text-destructive">{error.message}</p>}
          </div>
        )}
      />
    </div>
  );
};

const PriceFormPaid = () => {
  return <div>PriceFormPaid</div>;
};

const PriceFormUndecided = () => {
  const { control } = useFormContext<FormValues>();
  return (
    <div>
      <div>PriceFormUndecided</div>
      <Controller
        control={control}
        name="price.undecided.note"
        render={({ field, fieldState: { error } }) => (
          <div>
            <div>補足</div>
            <div>
              <Input
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            </div>
            {error && <p className="text-destructive">{error.message}</p>}
          </div>
        )}
      />
    </div>
  );
};

const PriceFormOthers = () => {
  const { control } = useFormContext<FormValues>();
  return (
    <div>
      <div>PriceFormOthers</div>
      <Controller
        control={control}
        name="price.others.note"
        render={({ field, fieldState: { error } }) => (
          <div>
            <div>補足</div>
            <div>
              <Input
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            </div>
            {error && <p className="text-destructive">{error.message}</p>}
          </div>
        )}
      />
    </div>
  );
};

export const Form = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  const formValues = watch();

  const onSubmit = (values: FormValues) => {
    console.log("送信データ：", values);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <div>{JSON.stringify(formValues)}</div>
        <Controller
          name="type"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <RadioLabelGroup<PriceType>
                value={field.value}
                items={PriceTypeItems}
                onChange={(value) => {
                  field.onChange(value);
                }}
              />
              {error && <p className="text-destructive">{error.message}</p>}
            </>
          )}
        />
        {formValues.type === "無料" && <PriceFormFree />}
        {formValues.type === "有料" && <PriceFormPaid />}
        {formValues.type === "未定" && <PriceFormUndecided />}
        {formValues.type === "その他" && <PriceFormOthers />}
        <div>{JSON.stringify(errors)}</div>
        <Button onClick={handleSubmit(onSubmit)}>送信</Button>
      </FormProvider>
    </div>
  );
};
