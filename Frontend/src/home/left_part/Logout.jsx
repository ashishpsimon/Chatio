import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("Chatio");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out succcessfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
  return (
    <div className=" h-[10vh] bg-slate-800">
      <div>
        <BiLogOut
          className="text-5xl text-white hover:bg-slate-700 rounded-md duration-300 p-2 ml-2 mt-1"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}

export default Logout;
