import { motion } from "framer-motion";
import heroBg from "../../public/heroBg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative  min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Top Right Small Points */}
      <div className="absolute bottom-45 sm:bottom-55 right-5 text-right space-y-2 text-white text-sm">
        <p>Industry-ready content</p>
      </div>

      {/* Scrolling Heading */}
      <div className="absolute sm:bottom-24 bottom-30 w-full overflow-hidden whitespace-nowrap">
        <motion.h2
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="text-[15vw] md:text-[8vw] font-extrabold text-white uppercase"
        >
          Learn today. Lead tomorrow.
        </motion.h2>
      </div>
    </section>
  );
}
