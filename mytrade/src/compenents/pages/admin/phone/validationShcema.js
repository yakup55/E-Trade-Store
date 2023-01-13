import { object,number, string } from "yup";
export const validationSchema = object({
  bluetooth: string().required(),
  cifthat: string().required(),
  dahilihafiza: string().required(),
  kameracözünürlügü: string().required(),
  pilgücü: string().required(),
  yüztanıma: string().required(),
  parmakizi: string().required(),
  image1: string().required(),
  image2: string().required(),
  image3: string().required(),
  colorId: number().positive().required(),
  brandId: number().positive().required(),
});
