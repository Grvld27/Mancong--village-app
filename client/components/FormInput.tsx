import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
export default function InputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

 const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);





  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("import.meta.env.VITE_API_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send: " + result.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error connecting to the server.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center text-white mb-4">Contact Us</h2>

      {status && <p className="text-center text-sm text-yellow-400">{status}</p>}

      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded-md bg-black text-white border   hover:shadow-lg hover:border-blue-500 hover:scale-110 transition duration-400 border-gray-700 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md bg-black text-white border   hover:shadow-lg hover:border-blue-500 hover:scale-110 transition duration-400 border-gray-700 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here"
          rows={4}
          className="w-full px-4 py-2 rounded-md bg-black text-white border  hover:scale-110 transition duration-400 hover:shadow-lg hover:border-blue-500 border-gray-700 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <motion.button
      whileTap={{
scale:2,




      }}


        whileHover={{
scale:1.05,
}}
      transition={{ duration: 0.3}}

        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Send Message
      </motion.button>
    </form>
  );
}
