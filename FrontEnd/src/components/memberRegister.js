import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerMember } from "../actions";

class MemberRegister extends Component {
  componentDidMount() {

  }

  onSubmit(values) {
    this.props.registerMember(values, () => {
      return this.props.history.push("/welcome");
    });
  }
  // TODO: Style form
  renderField(field) {
      const { meta: { touched, error }} = field;
      const className = `form__group ${ touched && error ? "form__danger" : " " }`;
    return (
      <div className={className}>
        <label>
          { field.label }
        </label>
        <input
          className="form__control"
          placeholder={ field.customPlaceholder ? field.customPlaceholder : field.label }
          type={ field.type ? field.type : "text" }
          required
          {...field.input}
        />
        <div className="form__text-help">
          { touched ? error : " " }
        </div>
        
      </div>
    );
  }

 

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="section-register">
          <div className="u-center-text u-margin-bottom-small">
            <h2 className="heading-secondary">
                  REGISTER
            </h2>
          </div>
          <div className="register__form">
            <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label="First Name"
                name="first_Name"
                component={this.renderField}
              />
              <Field
                label="Last Name"
                name="last_Name"
                customPlaceholder="Surname"
                component={this.renderField}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                component={this.renderField}
              />
              <Field
                label="Phone"
                customPlaceholder="080 000 0000"
                type="tel"
                name="phone"
                component={this.renderField}
              />
              <Field
                label="Password"
                name="password"
                type="password"
                component={this.renderField}
              />
              <div className="form__buttons">
                <button type="submit" className="btn btn--ptn">Join Now</button>
                <Link className="btn btn--gray" to="/">Cancel</Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
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

  // Validate phone number
  if (!values.phone) {
    errors.phone = "Enter your phone number";
  }

  // Validate password
  if (!values.password) {
    errors.password = "Enter your Password";
  }
  // Validate password
  if (values.password && values.password.length < 7) {
    errors.password = "Password must be at least eight characters";
  }
  return errors;
}
export default reduxForm({
  validate,
  form: "SignUpForm",
})(
   connect(null, { registerMember } )(MemberRegister)
);
