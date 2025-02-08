import { useState } from "react";
import { FaBars, FaBehance, FaInstagram, FaTimes } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "HOME", path: "/home" },
  { id: 2, name: "ABOUT", path: "/about" },
  { id: 3, name: "SERVICES", path: "/services" },
  { id: 4, name: "WORKS", path: "/works" },
  { id: 5, name: "BLOGS", path: "/blogs" },
  { id: 6, name: "CONTACT", path: "/contact" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clickHandler = (event) => {
    const category = event.target.innerText.toLowerCase();
    const selectedCategory = categories.find(
      (item) => item.name.toLowerCase() === category
    );
    console.log(selectedCategory);
    if (selectedCategory) {
      navigate(selectedCategory.path);
      setIsOpen(false);
    }
  };
  return (
    <>
      <button
        className="lg:hidden fixed top-5 left-5 z-20 text-white bg-black p-3 rounded"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`${isOpen?"fixed w-full":"hidden lg:block"} lg:fixed top-0 left-0 h-full font-ibm bg-black text-white p-6 
      lg:translate-x-0 lg:basis:1/5`}
      >
        <div className="h-screen flex flex-col justify-between">
          <div>
            <div className="my-12">
              <h1 className="text-3xl font-bold">Jac.</h1>
            </div>

            <ul onClick={clickHandler} className="space-y-3">
              {categories.map((item) => (
                <li
                  key={item.id}
                  className={`text-xl cursor-pointer ${
                    location.pathname === item.path ? "line-through" : ""
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1"></div>

          <div className="flex flex-col gap-2 mb-6">
            <div className="w-[40px] h-[40px] text-[20px] p-[10px] bg-white text-black items-center justify-center rounded-full">
              <FaBehance />
            </div>
            <div className="w-[40px] h-[40px] text-[20px] p-[10px] bg-white text-black items-center justify-center rounded-full">
              <IoBasketballOutline />
            </div>
            <div className="w-[40px] h-[40px] text-[20px] p-[10px] bg-white text-black items-center justify-center rounded-full">
              <FaInstagram />
            </div>
          </div>

          <div className="mb-4 w-[189px]">
            <p className="text-[16px] font-normal">
              Copyright ©2023 Jacob Jones. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
