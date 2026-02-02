import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConnectForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(
      "Connect with us – TECHNO 7 INTERNATIONAL",
    );
    const body = encodeURIComponent(
      `I'd like to connect with TECHNO 7 INTERNATIONAL.\n\nMy email: ${email.trim()}`,
    );

    window.location.href = `mailto:hello@techno7international.com?subject=${subject}&body=${body}`;

    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto sm:px-6 px-3">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            bg-white text-black
            rounded-xl
            shadow-2xl
            p-7 md:p-14
            text-center
            max-w-5xl
            mx-auto
          "
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl"
          >
            Let’s stay connected .
          </motion.h2>

          <p className="mt-3 text-zinc-700 tracking-wide max-w-lg mx-auto">
            Join our community and receive updates, exclusive content, and
            learning resources directly in your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              placeholder="Enter your email"
              className="
                flex-1
                rounded-lg
                border border-black/20
                px-4 py-3
                focus:outline-none
                focus:border-black
              "
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                bg-black text-white
                rounded-lg
                px-7 py-3
              "
            >
              Subscribe
            </motion.button>
          </form>

          {/* Status message */}
          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-sm text-black/60"
              >
                Check your email client to complete connecting with us.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-sm text-black"
              >
                Please enter a valid email address.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
