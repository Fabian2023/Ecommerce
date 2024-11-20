import Layout from "../../Components/Layout";
import { useState } from "react";

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false); // Estado para controlar la visualización

  const handleSignUpClick = () => {
    setShowSignUp(true); // Cambiar el estado a true al hacer clic en "Sign up"
  };

  return (
    <Layout>
      <div className=" absolute space-x-1 mt-20 ml-[-320px] ">
        <button
          onClick={handleSignUpClick} // Al hacer clic, cambia el estado a true
          className="text-white text-xs bg-[#424242] w-20 rounded-md h-7 relative top-[-40px] hover:bg-[#F0B90B]"
        >
          Sign up
        </button>
        <button
          className="text-white text-xs bg-[#424242] w-20 rounded-md h-7 relative top-[-40px] hover:bg-[#F0B90B]" // Hover para el cambio de color
        >
          Log in
        </button>
      </div>
      <div className="bg-[url('/back.jpg')] grid grid-cols-2 gap-4 p-6 rounded-lg w-[50%] h-[400px]">
        {!showSignUp ? (
          // Si showSignUp es false, muestra el formulario de inicio de sesión
          <form className="flex flex-col justify-center items-center">
            <h2 className="text-white text-sm">We love having you back</h2>
            <input
              type="text"
              placeholder="Mail"
              className="w-56 h-8 top-2 mt-4 text-xs rounded-md px-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-56 h-8 border-2 text-xs rounded-md px-2 mt-3 focus:outline-none"
            />
            <button className="bg-[#F0B90B] text-sm mt-6 w-56 rounded-md h-10">
              Continue
            </button>
            <h2 className="text-white justify-center mt-8 text-[10px]">
              For any questions, reach out fasalpe34@gmail.com
            </h2>
          </form>
        ) : (
          // Si showSignUp es true, muestra el div con el botón "Register With Your mail"

          <div className="flex flex-col justify-center items-center mt-40 ml-12 bg-[#F0B90B] rounded-md w-[70%] h-[10%]">
            <button className="text-black text-sm">
              Register With Your mail
            </button>
          </div>
        )}
        <div className="relative bg-black opacity-45 rounded-lg w-[90%] h-[370px] mt-[-8px]">
          <h2 className="text-white text-3xl z-10 text-center mt-2">
            Welcome back to TechPulse
          </h2>
        </div>
      </div>
      <img
        src={showSignUp ? "/man2.png" : "/man.png"}
        alt="Man"
        className="relative w-[25%] h-full mt-[-330px] ml-72 object-cover"
      />
    </Layout>
  );
};

export default SignIn;
