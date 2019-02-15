
export default function validate(getValidationSchema) {
    return (values) => {
      const validationSchema = getValidationSchema(values)
      try {
        const a = validationSchema.validateSync(values, { abortEarly: false })
        return a
      } catch (error) {
        return getErrorsFromValidationError(error)
      }
    }
  }
  
  function getErrorsFromValidationError(validationError) {
    const FIRST_ERROR = 0
    return validationError.inner.reduce((errors, error) => {
      return {
        ...errors,
        [error.path]: error.errors[FIRST_ERROR],
      }
    }, {})
  }