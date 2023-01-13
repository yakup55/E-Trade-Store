import { object, string } from "yup";
export const validationSchema = object({
  contactName: string().min(3).required(),
  contactMail: string().email().required(),
  contactSubject: string().min(5).required(),
  contactMessage: string().min(10).max(30).required(),
});
