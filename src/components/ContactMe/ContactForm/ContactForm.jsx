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
  const [loading, setLoading] = useState(false); // 🔴 Loader state

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
      setLoading(true); // 🔴 Loader start
      emailjs
        .send(
          "service_maxdy5o",
          "template_dv8q5gk",
          formData,
          "AXvy6tok3nFc0nO67"
        )
        .then(
          () => {
            setSubmitted(true);
            setFormData({ fullname: "", subject: "", email: "", message: "" });
            setErrors({});
            setLoading(false); // ✅ Loader stop
            setTimeout(() => setSubmitted(false), 3000);
          },
          (error) => {
            console.log(error.text);
            setLoading(false); // ✅ Loader stop on error
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

        <button type="submit" disabled={loading}>
          {loading ? <span className="loader"></span> : "SEND"}
        </button>

        {submitted && (
          <div className="success-msg">✅ Message sent successfully!</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
