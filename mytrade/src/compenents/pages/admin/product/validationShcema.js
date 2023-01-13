import { number, object, string } from "yup";
export const validationSchema = object({
  productName: string().min(56).required("Product name cannot be empty or blank!"),
  productImage: string().required("Product Image cannot be empty or blank ! "),
  productPrice:number().positive().integer().required(),
  categoryId:number().positive().integer().required()
});
