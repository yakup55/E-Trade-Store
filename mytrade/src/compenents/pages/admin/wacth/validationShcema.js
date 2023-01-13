import { number, object, string } from "yup";
export const validationSchema = object({
  adımSayar: string().required(),
  gps: string().required(),
  kalpRitmiOlcme: string().required(),
  kamera: string().required(),
  sesliGorusme: string().required(),
  suGecirme: string().required(),
  uykuTakibi: string().required(),
  uyumluMarka: string().required(),
  image1:string().required(),
  image2:string().required(),
  image3:string().required(),
  colorId:number().positive().required(),
  brandId:number().positive().required(),
});
