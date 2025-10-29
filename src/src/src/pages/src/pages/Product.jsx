import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";

const items = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    link: "https://www.flipkart.com",
  },
  {
    id: 2,
    name: "Trendy Sunglasses",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    link: "https://www.meesho.com",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    link: "https://www.flipkart.com",
  },
];

export default function Products({ search, cart, setCart, wishlist, setWishlist }) {
  const filtered = items.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (item) => {
    if (!cart.find((c) => c.id === item.id)) setCart([...cart, item]);
  };

  const addToWishlist = (item) => {
    if (!wishlist.find((w) => w.id === item.id)) setWishlist([...wishlist, item]);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {filtered.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#111] rounded-2xl p-4 shadow-md hover:shadow-gold/20 transition"
        >
          <img src={p.image} alt={p.name} className="rounded-xl mb-4 w-full h-48 object-cover" />
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-gold mb-2">{p.price}</p>
          <div className="flex justify-between items-center mt-3">
            <button onClick={() => addToCart(p)} className="bg-gold text-black px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <ShoppingCart size={16}/> Add
            </button>
            <button onClick={() => addToWishlist(p)}>
              <Heart size={20} className="text-gold hover:scale-110 transition" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
          }
