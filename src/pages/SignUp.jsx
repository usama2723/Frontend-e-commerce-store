import { useState, useEffect } from "react";
import { BsBluetooth } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  function SignUpFunc(e) {
    e.preventDefault();

    const Obj = {
      email,
      fullname,
      password,
    };

    console.log(Obj);

    axios
      .post("http://localhost:3000/api/user/signup", Obj)
      .then(() => {
        toast.success("account created");
        navigate("/signin");
      })
      .catch((err) => {
        toast.error("error when signing up");
      });
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function fullnameHandler(e) {
    setFullname(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover"
          src="https://wallpapers.com/images/hd/e-commerce-1900-x-1118-wallpaper-r2k1ldol65vss423.jpg "
          alt=""
        />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={SignUpFunc}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign Up
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email:</label>
            <input
              id="Email"
              type="email"
              value={email}
              onChange={(e) => emailHandler(e)}
              required
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>FullName:</label>
            <input
              id="FullName"
              type="text"
              value={fullname}
              onChange={(e) => fullnameHandler(e)}
              required
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password:</label>
            <input
              id="Password"
              type="password"
              value={password}
              onChange={(e) => passwordHandler(e)}
              required
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Accept Terms & Conditions{" "}
            </p>
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Sign Up
          </button>

          <p className="text-gray-500 dark:text-gray-400 text-center">
            Already a member?{" "}
            <Link
              to={"/signin"}
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              Sign In
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
