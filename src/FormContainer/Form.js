import React from "react"

const Form = ({
  isSubmitting,
  errors,
  handleChange,
  handleSubmit,
}) => (
  <div className="form">
    <label className="form-field" htmlFor="email">
      <span>E-mail:</span>
      <input
        name="email"
        type="email"
        onChange={handleChange}
      />
    </label>
    <div className="form-field-error">{errors.email}</div>
    <label className="form-field" htmlFor="password">
      <span>Password:</span>
      <input
        name="password"
        type="password"
        onChange={handleChange}
      />
    </label>
    <div className="form-field-error">{errors.password}</div>
    <label
      className="form-field"
      htmlFor="passwordConfirmation"
    >
      <span>Confirm password:</span>
      <input
        name="passwordConfirmation"
        type="password"
        onChange={handleChange}
      />
    </label>
    <div className="form-field-error">
      {errors.passwordConfirmation}
    </div>
    <label className="form-field" htmlFor="consent">
      <span>Consent:</span>
      <input
        name="consent"
        type="checkbox"
        onChange={handleChange}
      />
    </label>
    <div className="form-field-error">{errors.consent}</div>
    <button onClick={handleSubmit} type="submit">
      {isSubmitting ? "Loading" : "Sign Up"}
    </button>
  </div>
)

export default Form
