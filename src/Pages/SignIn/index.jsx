import Layout from "../../Components/Layout";
import { useState } from "react";
import { useContext } from "react";
import { ContextShop } from "../../Context/index";

const SignIn = () => {
  const context = useContext(ContextShop);

  const [activeButton, setActiveButton] = useState("login"); // Estado inicial en "login"
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // El formulario "Log in" se muestra por defecto
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };
      console.log(updatedFormData);  // Para verificar si se está actualizando el estado
      return updatedFormData;
    });
  };
  

  const handleCreateUser = () => {
    const { name, lastname, email, password } = formData;
    if (name && lastname && email && password) {
      context.createUser({name, lastname, email, password}); // Llamamos al contexto
      alert("usuario creado")
    } else {
      alert("Por favor, llena todos los campos.");
    }
  };

  const handleSignUpClick = () => {
    setActiveButton("signup");
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setActiveButton("login");
    setShowLogin(true);
    setShowSignUp(false);
  };

  return (
    <Layout>
      <div className="absolute space-x-1 mt-20 ml-[-320px]">
        <button
          onClick={handleSignUpClick}
          className={`text-white text-xs w-20 rounded-md h-7 relative top-[-40px] 
            ${
              activeButton === "signup"
                ? "bg-[#F0B90B]" // Color del hover si está activo
                : "bg-[#424242] hover:bg-[#F0B90B]" // Color normal y hover
            }`}
        >
          Sign up
        </button>
        <button
          onClick={handleLoginClick}
          className={`text-white text-xs w-20 rounded-md h-7 relative top-[-40px] 
            ${
              activeButton === "login"
                ? "bg-[#F0B90B]" // Color del hover si está activo
                : "bg-[#424242] hover:bg-[#F0B90B]" // Color normal y hover
            }`}
        >
          Log in
        </button>
      </div>
      <div className="bg-[url('/back.jpg')] grid grid-cols-2 gap-4 p-6 rounded-lg w-[50%] h-[400px]">
        {showLogin && (
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
        )}
        {showSignUp && (
          <div className="flex flex-col justify-center items-center space-y-4 mt-14">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name} 
              onChange={handleInputChange}
              className="px-1 rounded-md h-8 text-sm w-[73%] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={formData.lastname} 
              className="px-1 rounded-md h-8 text-sm w-[73%] focus:outline-none"
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email} 
              className="px-1 rounded-md h-8 text-sm w-[73%] focus:outline-none"
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={formData.password} 
              className="px-1 rounded-md h-8 text-sm w-[73%] focus:outline-none"
              onChange={handleInputChange}
            />
            <button
            type="button"
              onClick={handleCreateUser}
              className="bg-[#F0B90B] text-sm mt-6 w-56 rounded-md h-10"
            >
              create user
            </button>
            <h2 className="text-white justify-center mt-8 text-[10px]">
              For any questions, reach out fasalpe34@gmail.com
            </h2>
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
