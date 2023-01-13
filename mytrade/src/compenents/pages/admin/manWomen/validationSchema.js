import { number, object, string } from "yup";
export const validationSchema = object({
  ayakkabiTipi: string().required(),
  malzeme: string().required(),
  cinsiyet: string().required(),
  yakaStili: string().required(),
  tipi: string().required(),
  image1: string().required(),
  image2: string().required(),
  image3: string().required(),
  brandId: number().positive().integer().required(),
  sizeId: number().positive().integer().required(),
  numberId: number().positive().integer().required(),
  colorId: number().positive().integer().required(),
});
