import { useState } from "react"
import { LuMailOpen } from "react-icons/lu"

const NewsLetter = () => {

  const [email, setEmail] = useState("");

  function Subscribtion(e) {
    e.preventDefault();

    const Obj = {
      Email: email,

    }
    // localStorage.setItem('user', JSON.stringify(Obj));
    // const result = JSON.parse(localStorage.getItem('user')) || [];
    // console.log(result);
 
    const users = JSON.parse(localStorage.getItem('users')) || [];

        const found = users.find(user => user.Email === Obj.Email)
        if (found) {
         alert("You have already Subscribed to our NewsLetter.");
          return;
        }
        users.push(Obj)
        localStorage.setItem('users', JSON.stringify(users));
        console.log(Obj);
        alert('Thankyou For Your Subscription');

        setEmail('');
  }

  function emailHandler(e) {
    setEmail(e.target.value);

  }
  
  return (
    <div className="bg-accentDark ">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:text-2x1 font-semibold">
              Sign up to our NewsLetter
            </h3>
            <p>
              ...and receive $20 coupon for first shopping
            </p>
          </div>
        </div>
        <form onSubmit={Subscribtion} className="w-full max-w-[500px] relative">
          <input value={email} onChange={(e) => emailHandler(e)}
            className="py-4 px-6 w-full rounded-full text-black"
            type="email" required
            placeholder="Your Email Address..."
          />
          <button className="bg-accentDark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accent">
            Subscribe!
          </button>

        </form>
      </div>
    </div>
  )
}

export default NewsLetter
