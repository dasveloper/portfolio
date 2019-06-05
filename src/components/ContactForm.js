import React, { Component } from "react";
import { FaSpinner, FaCheck} from "react-icons/fa";
import Firebase from 'firebase/app'
import 'firebase/database'
let config = {
  apiKey: "AIzaSyC4zalVwX6sajhweNGElnX6z3dQWEAVVZM",
  authDomain: "portfolio-7ade8.firebaseapp.com",
  databaseURL: "https://portfolio-7ade8.firebaseio.com",
  storageBucket: "portfolio-7ade8.appspot.com",
  messagingSenderId: "431591720099"
};
const initialFormValues = {
    subject: {
        value: ""
      },
      email: {
        value: ""
      },
      body: {
        value: ""
      }
};
class ContactForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      formSubmitting: false,
      formSuccess: false,
      formError: false,
      formValues:  initialFormValues
      
    };

    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    }
    this.writeUserData = this.writeUserData.bind(this);
  }
  writeUserData = event => {
    this.setState({ formSubmitting: true });
    event.preventDefault();
    const { subject, email, body } = this.state.formValues;

    if (subject.value && email.value && body.value) {
      Firebase.database()
        .ref("/contacts")
        .push(this.state.formValues, error => {
          if (error)
            this.setState({
              formError: true,
              formSuccess: false,
              formSubmitting: false
            });
          else {
            this.setState({
              formSuccess: true,
              formError: false,
              formSubmitting: false,
              formValues:  initialFormValues

            });
          }
        });
    } else {
      this.setState({ formSubmitting: false });
    }
  };
  formChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formSuccess: false,
      formError: false,
      formValues: {
        ...this.state.formValues,
        [name]: {
          ...this.state.formValues[name],
          value
        }
      }
    });
  };
  render() {
    const { formValues, formError, formSuccess, formSubmitting } = this.state;
    const { subject, email, body } = formValues;
    return (
      <form
        className="contact-form-wrapper"
        onSubmit={e => this.writeUserData(e)}
      >
        <input
          type="text"
          className="form-input"
          name="subject"
          value={this.state.formValues.subject.value}
          onChange={this.formChangeHandler}
          placeholder="Subject"
        />
        <input
          type="email"
          className="form-input"
          name="email"
          value={this.state.formValues.email.value}
          onChange={this.formChangeHandler}
          placeholder="Email"
        />
        <textarea
          rows="10"
          className="form-textarea"
          name="body"
          value={this.state.formValues.body.value}
          onChange={this.formChangeHandler}
          placeholder="How can I help you?"
        />
        <button
          disabled={!subject.value || !email.value || !body.value || formSubmitting || formSuccess}
          className={`btn submit-form ${formSubmitting ? "submitting" : ""} ${
            formSuccess ? "success" : ""
          }`}
          type="submit"
        >
          <span className="submit-form-text">Send</span>
          <FaSpinner className="submit-form-submitting"/>
          <FaCheck className="submit-form-success"/>

        </button>
        {formError && (
          <p className="form-error">
            Something went wrong, please try again or send me an email
          </p>
        )}
        {formSuccess && (
          <p className="form-success">
            Message sent! I'll get back to you shortly
          </p>
        )}
      </form>
    );
  }
}

export default ContactForm;
