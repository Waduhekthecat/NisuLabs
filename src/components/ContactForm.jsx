import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); 

    const endpoint = "https://formspree.io/f/xjkwpkle";
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div class="contact-section">
      <div class="contact-form-container dark-theme">
        <h2>Inquire About Service</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?"
              rows="5"
            />
          </label>
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          {status === "SUCCESS" && (
            <p className="success-message">Thank you! We'll get back to you soon.</p>
          )}
          {status === "ERROR" && (
            <p className="error-message">Something went wrong. Please try again.</p>
          )}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
