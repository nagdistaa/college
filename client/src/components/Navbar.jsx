import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[60px] px-4 flex items-center justify-between bg-blue-500 text-white sticky top-0 left-0 backdrop-blur-2xl shadow-lg">
      {/* Logo */}
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <h2>LOGO</h2>
      </div>
      {/* Admin */}
      <div className="">
        <button>Admin</button>
      </div>
    </div>
  );
};

export default Navbar;
