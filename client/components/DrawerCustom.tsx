import { useState } from "react";
import SpotlightCard from "../hooks/SpotlightCard";
import { motion } from "framer-motion";

function MiniMenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {/* Mini Floating Button */}
      <motion.button
        whileTap={{ backgroundColor: 'gray', scale: 1.8 }}
        whileHover={{ scale: 1.06, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.3 }}
        onClick={toggleDrawer}
        className="fixed z-50  lg:mb-50  lg:mr-10 bottom-6 right-0 bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition"
        aria-label="Help"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="black" viewBox="0 0 24 24">
          <path d="M 12 2 C 10.343 2 9 3.343 9 5 C 9 6.657 10.343 8 12 8 C 13.657 8 15 6.657 15 5 C 15 3.343 13.657 2 12 2 z M 9 10 A 1 1 0 0 0 9 12 L 10 12 L 10 20 L 9 20 A 1 1 0 0 0 9 22 L 15 22 A 1 1 0 0 0 15 20 L 14 20 L 14 11 C 14 10.448 13.552 10 13 10 L 11 10 L 9 10 z" />
        </svg>
      </motion.button>

      {/* Backdrop Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40  bg-opacity-10 backdrop-blur-sm flex items-center justify-center overflow-hidden"
          onClick={closeDrawer}
        >
          {/* Drawer Content */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-screen-md mx-4 sm:mx-auto px-4 sm:px-8"
          >
            <div className=" rounded-xl shadow-xl p-4 sm:p-8 max-h-[90vh] overflow-y-auto">
              <SpotlightCard className="w-full lg:w-full xl:w-fit">
                {/* Judul */}
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-4">Mancong Village v1.0</h1>
                </div>

                {/* Konten */}
                <div className="space-y-4">
                  <p className="text-white text-sm leading-relaxed text-justify">
                    On the banks of the Mahakam River, a village is hidden that holds local wisdom, customs, and stories of the past that are still alive—that is Kampung Mancong.
                    Through this website, we invite you to explore the corridors of time: get to know the Dayak Benuaq culture, see traditional ceremonies, explore the pristine nature, and feel the friendliness of our people.
                    Welcome, and enjoy exploring Kampung Mancong digitally.
                  </p>

                  <h2 className="text-md font-bold mt-4">Disclaimer</h2>
                  <p className="text-sm text-white">
                    All images included in this assignment were obtained from various sources and are used strictly for educational purposes. Copyright and ownership remain with the original creators.
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default MiniMenuDrawer;
