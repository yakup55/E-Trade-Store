import { object, string } from "yup";
export const validationSchema=object({
    aboutDetails:string().min(20).max(100).required(),
    aboutImage:string().required()

})