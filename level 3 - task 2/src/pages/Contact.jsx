
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import Reveal from "../components/Reveal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };
  const shouldReduceMotion = useReducedMotion();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <Reveal>
        <section className="page-hero">
          <span className="section-label">WE'RE HERE TO HELP</span>
          <h1>Let's Start a Conversation</h1>
          <p>
            Have a question or suggestion? We'd love to hear from you.
            Send us a message and connect with EduNova.
          </p>
        </section>
      </Reveal>

      <section className="contact-layout">
        <Reveal>
          <motion.div
            className="contact-info"
              whileHover={
             shouldReduceMotion ? undefined : { y: -5 }
              }
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
            <span className="section-label">GET IN TOUCH</span>
            <h2>We'd love to hear from you.</h2>
            <p>
              Whether you need help choosing a course or have feedback
              about the platform, feel free to reach out.
            </p>

            <div className="contact-detail">
              <span><Mail size={21} /></span>
              <div>
                <strong>Email</strong>
                <p>hello@edunova.example</p>
              </div>
            </div>

            <div className="contact-detail">
              <span><Phone size={21} /></span>
              <div>
                <strong>Phone</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-detail">
              <span><MapPin size={21} /></span>
              <div>
                <strong>Location</strong>
                <p>India</p>
              </div>
            </div>

            <div className="contact-note">
              <MessageCircle size={23} />
              <p>Every great learning journey begins with a question.</p>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
               whileHover={
                 shouldReduceMotion ? undefined : { y: -5 }
               }
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
           >
            <h2>Send Us a Message</h2>
            <p>Fill in the details below.</p>

            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="primary-btn submit-btn">
              Send Message <Send size={17} />
            </button>

            {submitted && (
              <div className="success-message">
                <CheckCircle size={19} />
                Your message has been submitted successfully!
              </div>
            )}

            <small>
              Demo form: your message is not sent to a server.
            </small>
          </motion.form>
        </Reveal>
      </section>
    </main>
  );
}

export default Contact;
