import { number,object } from "yup";
export const validationSchema = object({
  shoesNumber:number().positive().integer().required(),
});
