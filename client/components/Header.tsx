import { useEffect, useRef, useState } from "react";
import logo from "../dist/assets/logo_aplikasi-removebg-preview.png";
import { motion } from "framer-motion";
function HeaderCustom() {

const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);



      const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scroll ke bawah
        setVisible(false);
      } else {
        // Scroll ke atas
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };


  const navRef = useRef(null);

   useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  const navItems = [
    {
      href: "/",
      label: (
        <svg
          style={{ margin: "4px -2pc 0pc 0pc" }}
          className=" transition hover:scale-150 duration-300"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 1024 1024"
          height="1em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
        </svg>
      ),
    },
    {
      href: "/HistoryPage",
      label: <button className="button" style={{ margin: "0pc -5pc 0pc 0pc" }}>History</button>,
    },
    {
      href: "/ProfilePage",
      label: <button className="button" style={{ margin: "0pc -4pc 0pc 0pc" }}>Profile</button>,
    },
    {
      href: "/GalleryPage",
      label: <button className="button">Documentation</button>,
    },
    {
      href: "/DestinationPage",
      label: <button className="button">Destination info</button>,
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400&display=swap"
        rel="stylesheet"
      />
      <style>
        {`




          .custom-nav {
            background: black;
            padding: 0.5rem 0;
            margin: -20px auto 7rem auto;
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
          
            position: fixed;
            top: 14px;
            left: 0;
            right: 0;
            z-index: 1000;
          }

          .button {
            outline: 0 !important;
            border: 0 !important;
            width: 128px;
            margin: 0pc -2pc 0pc 1pc;
            border-radius: 3%;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            transition: all ease-in-out 0.5s;
            cursor: pointer;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: bolder;
          }

          .button:hover {
            transform: translateY(-4px);
          }

          .custom-ul {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            margin: -30px 0pc 0pc 0pc;
            padding: 0.5rem;
            justify-content: center;
            width: 100%;
          }

          .custom-li {
            margin: 4px 1rem -6rem 1rem;
          }

          .custom-link {
            color: white;
            font-weight: 400;
            text-decoration: none;
            transition: color 2s;
            font-family: 'Roboto', sans-serif;
          }

          .custom-nav-spacer {
            height: 4.5rem;
          }

          @media (max-width: 900px) {
            .custom-ul {
              flex-direction: column;
              background: #fff;
              position: absolute;
              top: 4.5rem;
              left: 0;
              right: 0;
              box-shadow: 0 8px 24px rgba(0,0,0,0.15);
              display: none;
            }
            .custom-nav {
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}
      </style>

      <div className="custom-nav-spacer"></div>

      <div ref={navRef}>


  


        <motion.nav 
        initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}


      transition={{ duration: 0.3 }}
        
        
        
        className="custom-nav">
       
          <ul className="custom-ul">
            {navItems.map((item, idx) => (
              <li
                key={
                  typeof item.label === "string"
                    ? item.label
                    : `nav-item-${idx}`
                }
                className="custom-li"
              >
                {item.href ? (
                  <a href={item.href} className="custom-link">
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </>
  );
}

export default HeaderCustom;
