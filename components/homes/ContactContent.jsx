"use client";

import { contactData } from "@/data/contactData";
import Navbar from "@/components/layout/Navbar";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactContent() {
  const form = useRef();
  const year = new Date().getFullYear();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uxc1yef",
        "template_vkowc5d",
        form.current,
        "s_ZBlZ3rg_KvIOZAQ",
      )
      .then(
        () => {
          toast.success("Message Sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        },
        () => {
          toast.error("Ops Message not Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
      );
  };

  return (
    <>
      <Navbar />
      <main className="page-enter max-w-4xl mx-auto px-4 py-12 mt-16">
        {/* Header */}
        <h1 className="section-title">Contact</h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div>
            {contactData.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-4">
                <i
                  className={item.iconClass}
                  style={{ color: item.color, fontSize: item.fontSize }}
                />
                <div>
                  <p className="text-sm text-ink-muted dark:text-slate-400 uppercase tracking-wider">
                    {item.text.label}
                  </p>
                  <p className="text-ink font-medium">{item.text.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label className="form-label">Name *</label>
              <input name="name" type="text" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Email *</label>
              <input
                name="email"
                type="email"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                name="message"
                className="form-input"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="site-footer mt-16">
          <span>© {year} All Rights Reserved by PWTeam.</span>
        </footer>
      </main>
    </>
  );
}
