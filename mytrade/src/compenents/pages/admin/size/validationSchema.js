import { string, object } from "yup";
export const validationSchema = object({
  sizeName: string().required(),
});
