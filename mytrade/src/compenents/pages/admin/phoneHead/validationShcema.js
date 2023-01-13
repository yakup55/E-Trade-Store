import { number, object, string } from "yup";
export const validationSchema = object({
  gurultuOnleme: string().required(),
  bluetoothVersiyon:string().required(),
  ciftTelefonDestegi:string().required(),
  suyaTereDayanikli:string().required(),
  kullanimTipi:string().required(),
  image1:string().required(),
  image2:string().required(),
  image3:string().required(),
  colorId:number().positive().required(),
  brandId:number().positive().required(),
});
