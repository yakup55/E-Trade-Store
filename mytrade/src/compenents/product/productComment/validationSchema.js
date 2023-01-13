import { object, string } from "yup";

export const ValidationSchema=object({
    commentName:string().min(5).required("Name is required"),
    commentSubject:string().min(5).required("Subject is required"),
    message:string().min(10).max(100).required("Mesaage is required")
})