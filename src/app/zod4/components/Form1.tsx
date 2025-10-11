import { z } from "zod";

const _schema = z.object({
  zod1: z.string().min(5, {
    error: "5文字以上で入力してください",
  }),
  zod2: z.number().min(10, {
    error: (issue) => `最小値は 10 ですが、入力は ${issue.received} です`,
  }),
  zod3: z.string().optional().default("デフォルト"),
  zod4: z.number().catch(0),
  zod5: z.discriminatedUnion("type", [
    z.object({ type: z.literal("a"), value: z.string() }),
    z.object({ type: z.literal("b"), value: z.number() }),
  ]),
  zod6: z.enum(["orange", "banana", "apple"]),
});

export const Form = () => {
  return <div>form</div>;
};
