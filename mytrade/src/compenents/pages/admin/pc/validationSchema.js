import {number, object,string} from "yup"
export const validationSchema=object({
    ram:string().required(),
    ramTipi:string().required(),
    sddKapasite:string().required(),
    bellekHizi:string().required(),
    cihazAgirligi:string().required(),
    ekranBoyutu:string().required(),
    ekranCozunurlugu:string().required(),
    ekranYenilemeHizi:string().required(),
    İslemciNesli:string().required(),
    İslemciTipi:string().required(),
    image1:string().required(),
    image2:string().required(),
    image3:string().required(),
    colorId:number().positive().required(),
    brandId:number().positive().required(),
})