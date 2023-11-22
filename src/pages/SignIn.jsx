import { useState, useEffect } from "react";
import { BsBluetooth } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
  

    function SignInFunc(e) {
        e.preventDefault();

        axios.post('http://localhost:3000/api/user/signin', { email, password }).then((response) => {
            alert("Successfully Signin");
          
            console.log(response);   
            const { token } = response.data;
                console.log(token)
                localStorage.setItem("token", token);

                navigate('Home')



        }).catch((err) => {
            alert('error when signing up')
        })

    }

    function emailHandler(e) {
        setEmail(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">

            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src="https://wallpapers.com/images/hd/e-commerce-1900-x-1118-wallpaper-r2k1ldol65vss423.jpg " alt="" />
            </div>
            <div className="bg-gray-800 flex flex-col justify-center">
                <form onSubmit={SignInFunc} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center">Sign In</h2>
                    <div className="flex flex-col text-gray-400 py-2">

                        <label >Email:</label>
                        <input id="Email" type="email" value={email} onChange={(e) => emailHandler(e)} required className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" />
                    </div>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Password:</label>
                        <input id="Password" type="password" value={password} onChange={(e) => passwordHandler(e)} required className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" />
                    </div>
                    <div className="flex justify-between text-gray-400 py-2">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember Me </p>
                        <p><Link className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Forgot Password</Link></p>
                    </div>
                    <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">Sign In</button>

                    <p className="text-gray-500 dark:text-gray-400 text-center">Create an account  <Link to={"/signup"} className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Sign Up</Link> </p>

                </form>
            </div>
        </div>
    )
}
export default SignIn
