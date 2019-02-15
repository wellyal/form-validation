import React from "react"
import { Formik } from "formik"
import validate from "./validate-yup"
import getValidationSchema from "./getValidationSchema"
import Form from "./Form"

const initialValues = {
  email: "",
  password: "",
  passwordConfirmation: "",
  consent: false,
}

const onSubmit = (values, { setSubmitting, setErrors }) => {
  console.log("User has been sucessfully saved!", values)
  setSubmitting(false)
}

const FormContainer = () => (
  <Formik
    initialValues={initialValues}
    validate={validate(getValidationSchema)}
    onSubmit={onSubmit}
    render={Form}
  />
)


export default FormContainer
