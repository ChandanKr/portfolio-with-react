import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Name can't be empty";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "service_maxdy5o",   // EmailJS Service ID
          "template_dv8q5gk",  // Template ID
          formData,
          "AXvy6tok3nFc0nO67"       // EmailJS User ID / Public Key
        )
        .then(
          () => {
            setSubmitted(true);
            setFormData({ fullname: "", subject: "", email: "", message: "" });
            setErrors({});
            setTimeout(() => setSubmitted(false), 3000);
          },
          (error) => {
            console.log(error.text);
            alert("Oops! Something went wrong, please try again.");
          }
        );
    }
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit} noValidate>
        <div className="name-container">
          <div className="field-group">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className={errors.fullname ? "has-error" : ""}
            />
            {errors.fullname && (
              <span className="error-msg">{errors.fullname}</span>
            )}
          </div>

          <div className="field-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "has-error" : ""}
            />
            {errors.subject && (
              <span className="error-msg">{errors.subject}</span>
            )}
          </div>
        </div>

        <div className="field-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "has-error" : ""}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className="field-group">
          <textarea
            name="message"
            placeholder="Message [Kindly note that by clicking 'Send' Button, all submitted information will be forwarded to my official email.]"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "has-error" : ""}
          />
          {errors.message && (
            <span className="error-msg">{errors.message}</span>
          )}
        </div>

        <button type="submit">SEND</button>

        {submitted && (
          <div className="success-msg">✅ Message sent successfully!</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
