import { NavLink } from "react-router-dom";
import { FaBars} from "react-icons/fa";
import { MdReviews, MdManageAccounts } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiOutlineGift, AiTwotoneBank } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/usermanagement",
    name: "User Management",
    icon: <MdManageAccounts />,
  },
  {
    path: "/adminproduct",
    name: "Product Management",
    icon: <AiOutlineGift />,
  },
  {
    path: "/adminorders",
    name: "Order Management",
    icon: <BiCog />,
  },
  {
    path: "/adminreviews",
    name: "Manage Reviews",
    icon: <MdReviews />,
  }
 
];

const AgriMartSideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.4,
      },
    },
    show: {
      width: "140px",
      padding: "0px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container" style={{backgroundColor:'black', borderRadius:'0px 10px 10px 0px',height:'450px'}}>
        <div style={{height:'15px'}}></div>
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 1.0,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <h5 style={{color:'white', textAlign:'center'}}>Admin Portal</h5>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars style={{color:'white', marginTop:'20px', position:'fixed', fontSize:'22px'}} onClick={toggle} />
            </div>
          </div>


<div style={{height:'60px'}}></div>


          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon" style={{color:'white', fontSize:'25px'}}>{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                        style={{color:'#C0C0C0', marginLeft:'20px', paddingBottom:'10px'}}
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default AgriMartSideBar;

