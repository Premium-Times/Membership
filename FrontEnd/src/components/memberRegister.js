import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerMember } from "../actions";

class MemberRegister extends Component {
  componentDidMount() {

  }
  // TODO: Style form
  renderField(field) {
      const { meta: { touched, error }} = field;
      const className = `form-group ${ touched && error ? "has-danger" : " " }`;
    return (
      <div className={className}>
        <label>
          { field.label }
        </label>
        <input
        className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
            { touched ? error : " " }
        </div>
        
      </div>
    );
  }

  onSubmit(values) {
    this.props.registerMember(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="First Name"
          name="first_Name"
          component={this.renderField}
        />
        <Field
          label="Last Name"
          name="last_Name"
          component={this.renderField}
        />
        <Field
          label="Email"
          name="email"
          component={this.renderField}
        />
        <Field
          label="Phone"
          name="phone"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password"
          component={this.renderField}
        />

        <button type="submit" className="btn btn--ptn">Register</button>
        <Link className="btn btn--white" to="/">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  // Validate first name
  if (!values.first_Name) {
    errors.first_Name = "Enter your first name";
  }

  // Validate last name
  if (!values.last_Name) {
    errors.last_Name = "Enter your last name";
  }

  // Validate email
  if (!values.email) {
    errors.email = "Enter your email";
  }

  // Validate first name
  if (!values.phone) {
    errors.phone = "Enter your phone number";
  }

  // Validate first name
  if (!values.password) {
    errors.password = "Enter your Password";
  }
  return errors;
}
export default reduxForm({
  validate,
  form: "SignUpForm",
})(
   connect(null, { registerMember } )(MemberRegister)
);
