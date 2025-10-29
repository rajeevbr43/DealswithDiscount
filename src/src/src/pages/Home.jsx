import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-[#111] to-[#000]">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gold mb-3"
      >
        Trending Deals Everyday 💸
      </motion.h1>
      <p className="text-gray-400 mb-6">
        Discover premium products at unbelievable discounts.
      </p>
      <Link
        to="/products"
        className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
      >
        Shop Now
      </Link>
    </section>
  );
}
