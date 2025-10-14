"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { GlobalError } from "react-hook-form";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const JobType = {
  engineer: "engineer",
  designer: "designer",
} as const;

// type JobType = (typeof JobType)[keyof typeof JobType];

// NOTE: 書き方メモ
// const JobTypeSchema = z.enum(
//   Object.values(JobType) as [JobType, ...JobType[]]
// );

const EngineerSchema = z.object({
  jobType: z.literal(JobType.engineer),
  languages: z.array(z.string().min(3)),
});

const DesignerSchema = z.object({
  jobType: z.literal(JobType.designer),
  tools: z.array(z.string().min(3)),
});

export const JobSchema = z.discriminatedUnion("jobType", [
  EngineerSchema,
  DesignerSchema,
]);

export const UserSchema = z.object({
  name: z.string().min(1),
  job: JobSchema,
});

export type UserFormType = z.infer<typeof UserSchema>;

export const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UserFormType>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      // name: "",
      // job: { jobType: "engineer", languages: ["TypeScript"] },
    },
  });

  const formValues = watch();

  const jobType = useWatch({ control, name: "job.jobType" });

  const onSubmit = (data: UserFormType) => {
    console.log("送信データ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
      <div>{JSON.stringify(formValues)}</div>
      <div>
        <input {...register("name")} className="block border p-1" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <fieldset className="border p-2">
        <legend>職種</legend>
        <select {...register("job.jobType")} className="mb-2 border p-1">
          <option value="engineer">エンジニア</option>
          <option value="designer">デザイナー</option>
        </select>

        {jobType === "engineer" && (
          <div>
            <p>engineer</p>
            <input
              onBlur={(e) => {
                setValue("job.languages", [e.target.value]);
              }}
            />
            {jobType === "engineer" &&
              JSON.stringify(
                (errors.job as { languages?: GlobalError })?.languages?.message
              )}
            {/* <input
              {...register("job.languages.0")}
              className="block border p-1"
              placeholder="TypeScriptなど"
            />
            {errors.job?.jobType === "engineer" && errors.job?.languages && (
              <p className="text-red-500">{errors.job.languages.message}</p>
            )} */}
          </div>
        )}

        {jobType === "designer" && (
          <div>
            <p>designer</p>
            {/* <input
              {...register("job.tools.0")}
              className="border p-1 block"
              placeholder="Figmaなど"
            />
            {errors.job?.jobType === "designer" && errors.job?.tools && (
              <p className="text-red-500">{errors.job.tools.message}</p>
            )} */}
          </div>
        )}
      </fieldset>

      <button type="submit">登録</button>
    </form>
  );
};
