import { object, string } from "yup";
export const validationSchema = object({
  categoryName: string().required("Category name cannot be empty or blank!"),
  categoryImage: string().required("Category Image cannot be empty or blank ! "),
});
