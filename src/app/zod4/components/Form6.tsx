"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const priceFreeSchema = z.object({
  registration: z.boolean(),
  note: z.string().optional(),
});

const pricePaidSchema = z.object({
  note: z.string().optional(),
});

const priceUndecidedSchema = z.object({
  note: z.string().min(1),
});

const priceOthersSchema = z.object({
  note: z.string().min(1),
});

const priceSchema = z.object({
  free: priceFreeSchema,
  paid: pricePaidSchema,
  undecided: priceUndecidedSchema,
  others: priceOthersSchema,
});

const PriceFormFree = () => {
  return <div>PriceFormFree</div>;
};

const PriceFormPaid = () => {
  return <div>PriceFormPaid</div>;
};

const PriceFormUndecided = () => {
  return <div>PriceFormUndecided</div>;
};

const PriceFormOthers = () => {
  return <div>PriceFormOthers</div>;
};

export const Form = () => {
  return <div>form</div>;
};
