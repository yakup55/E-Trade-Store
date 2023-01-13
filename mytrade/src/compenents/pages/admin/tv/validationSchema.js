import { number, object, string } from "yup";
export const validationSchema = object({
  dahiliUyduAlici: string().required(),
  ekranEbati: string().required(),
  ekranFormati: string().required(),
  pcBaglantisi: string().required(),
  wifi: string().required(),
  hdmiGirisleri: string().required(),
  kurulum: string().required(),
  image1: string().required(),
  image2: string().required(),
  image3: string().required(),
  brandId: number().positive().integer().required(),
});
