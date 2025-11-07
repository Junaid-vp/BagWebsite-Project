import React from "react";
import * as Yup from "yup";
export const RegValidation = Yup.object({
  Fname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .required("First name is required"),
  Lname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .required("Last name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be minimum 6 characters")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    //   "Password must include uppercase, lowercase, number and special character"
    // )
    .required("Password is required"),
});
