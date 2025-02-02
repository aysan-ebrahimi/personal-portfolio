import { FaBehance, FaInstagram } from "react-icons/fa";
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

  const clickHandler = (event) => {
    const category = event.target.innerText.toLowerCase();
    const selectedCategory = categories.find(
      (item) => item.name.toLowerCase() === category
    );
    console.log(selectedCategory);
    if (selectedCategory) {
      navigate(selectedCategory.path);
    }
  };
  return (
    <div className="basis-1/5 h-full fixed">
      <div className="h-screen font-ibm flex flex-col justify-between bg-black text-white pl-[48px]">
        <div className="">
          <div className="my-[48px]">
            <h1 className="text-30px font-bold">Jac.</h1>
          </div>

          <ul onClick={clickHandler} className="space-y-3">
            {categories.map((item) => (
              <li
                key={item.id}
                className={`text-20px ${
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
  );
};

export default Sidebar;
