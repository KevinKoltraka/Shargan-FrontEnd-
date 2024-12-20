import { useState, useEffect } from "react";
import "./contact.css";
import ContactImg from "./../../images/chat.gif";
import Social from "../../components/SocialIcons/Social";
import Hero from "../../components/HeroSection/Hero";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const API_URL =
      process.env.REACT_APP_API_URL || "https://shargan-server.onrender.com";

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        const data = await response.json();
        setStatus(data.message); // Show success message
      } else {
        const error = await response.json();
        setStatus(error.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setStatus("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Automatically clear the status after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <Hero
        title="Contact Us"
        description="We’d love to hear from you! Feel free to reach out with any questions, feedback, or inquiries, and we’ll get back to you as soon as possible."
        heroImg={ContactImg}
        urlLink="https://api.whatsapp.com/send?phone=355699305604"
      />

      <div className="social-contact">
        <Social />
      </div>

      <div className="mega-contact-box">
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="enquiry-form">
              <h3>Enquiry Form</h3>
            </div>
            <div className="form-item">
              <input
                type="text"
                name="sender"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email:</label>
            </div>
            <div className="form-item">
              <textarea
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label>Message:</label>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          <div>
            {status && (
              <p className={status.startsWith("Error") ? "error" : "success"}>
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
