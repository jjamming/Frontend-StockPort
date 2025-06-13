import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ToLogin = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <Button className="w-30 h-13 rounded-4xl text-navy bg-white font-suit font-bold text-xl hover:opacity-70 cursor-pointer">
        <Link to="login">Log in</Link>
      </Button>
    </div>
  );
};

export default ToLogin;
