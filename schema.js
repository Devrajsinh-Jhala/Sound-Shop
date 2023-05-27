import * as Yup from "yup";

export const contactFormSchema = Yup.object({
  name: Yup.string().min(2).max(50).required("Please Enter your Name!"),
  email: Yup.string().email().required("Please Enter your Email!"),
  message: Yup.string().min(2).required("Please Enter your Message!"),
});
