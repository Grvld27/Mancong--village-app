import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function HeaderCustom() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  const navItems = [
    {
      href: "/",
      label: (
        <svg
          className="h-6 w-8 text-white xl:mr-10 hover:scale-129 transition-transform duration-300"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
        </svg>
      ),
    },
    { href: "/HistoryPage", label: "History" },
    { href: "/ProfilePage", label: "Profile" },
    { href: "/GalleryPage", label: "Documentation" },
    { href: "/DestinationPage", label: "Destination Info" },
  ];

  return (
    <>
      <div className="h-16"></div> {/* Spacer for fixed navbar */}
      <div ref={navRef}>
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: visible ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50  bg-black xl:py-5 py-5   md:py-8  w-auto sm:py-8 "
        >
          <ul className="flex flex-wrap justify-center items-center sm:gap-15  xl:gap-0 xl:w-fit  xl:mx-auto gap-4 px-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="text-white xl:text-m sm:text-xl text-1xl hover:-translate-y-1 transition-all duration-300"
                >
                  {typeof item.label === "string" ? (
                    <button className="   xl:w-39 xl:h-15 sm:hover:bg-none  sm:rounded-2xl  xl:rounded-xl  xl:hover:bg-gradient-to-r from-cyan-400 to-blue-500  transition duration-500  ">{item.label}</button>
                  ) : (
                    item.label
                  )}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </>
  );
}

export default HeaderCustom;
