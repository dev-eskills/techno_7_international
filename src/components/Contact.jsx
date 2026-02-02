import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactForm() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const ADMIN_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // your old one
    const AUTO_REPLY_TEMPLATE = import.meta.env.VITE_EMAILJS_AUTO_TEMPLATE_ID; // new one
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // 1️⃣ send to you (admin)
      await emailjs.sendForm(
        SERVICE_ID,
        ADMIN_TEMPLATE,
        form.current,
        PUBLIC_KEY,
      );

      // 2️⃣ send auto reply to user
      await emailjs.sendForm(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE,
        form.current,
        PUBLIC_KEY,
      );

      toast.success("🚀 Message sent successfully!");
      form.current.reset();
    } catch (error) {
      toast.error("❌ Failed to send. Try again.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 grid lg:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl ">Let’s Talk</h2>
          <p className="text-white/60">
            Questions about courses or enrollment? Send us a message and we’ll
            reply quickly.
          </p>

          <div className="text-white/70 space-y-2">
            <p>
              4th Floor, Apollo Avenue, Above Nafees Restaurant,Guitar Square,
              Old Palasia, Indore
            </p>
            <p>techno7international@gmail.com</p>
            <p>Mon – Fri, 9am – 6pm</p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-black p-10 rounded-lg space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="first_name"
              placeholder="First name"
              required
              className="input"
            />
            <input
              name="last_name"
              placeholder="Last name"
              required
              className="input"
            />
          </div>

          <input
            name="user_email"
            type="email"
            placeholder="Email"
            required
            className="input"
          />

          <select name="course_name" className="input">
            <option>Graphic Designing</option>
            <option>Digital Marketing</option>
            <option>Video Editing</option>
            <option>All-In-One Course</option>
          </select>

          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            required
            className="input"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSending}
            className="w-full bg-black text-white py-4 rounded-lg"
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
