import Layout from "../../Components/Layout";
import { useState, useContext} from "react";
import{useNavigate} from "react-router-dom"
import { ContextShop } from "../../Context/index";
import Modal from "react-modal"


// Configurar el elemento raíz del modal
Modal.setAppElement("#root");

const SignIn = () => {
  const context = useContext(ContextShop);
  const navigate = useNavigate()

  const [activeButton, setActiveButton] = useState("login"); // Estado inicial en "login"
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // El formulario "Log in" se muestra por defecto
  const[isModalOpen, setIsModalOpen] = useState(false)
  const[continueButtonModal, setContinueButtonModal] = useState(false)
  const [loginUser,setLoginUser ] = useState({email:"", password:""})
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handlerLoginUser = (e) => {
    const { name, value } = e.target;
    console.log("Input changed:", name, value);
    setLoginUser((prev) => {
      const updatedUser = { ...prev, [name]: value };
      console.log("Updated loginUser:", updatedUser); // Verifica cómo se actualiza el estado
      return updatedUser;
    });
  };
  

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginUser;
  
    if (!email || !password) {
      setContinueButtonModal(true)
      return;
    }
  
    context.loginUser(email, password); // Llamada al contexto
    
    setLoginUser({email:"", password:""})
  
  };

  const handlerNavigate = ()=>{
  navigate("/")
  }
  
  



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };
        
      return updatedFormData;
    });
  };
  

  const handleCreateUser = () => {
    const { name, lastname, email, password } = formData;
    if (name && lastname && email && password) {
      context.createUser({name, lastname, email, password}); // Llamamos al contexto
      
      setFormData({
        name: "",
        lastname: "",
        email: "",
        password: "",
      });
    } else {
      setIsModalOpen(true); 
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


  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
    setContinueButtonModal(false)
    context.setisModalLoginUSer(false)
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
          Register
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
          <form className="flex flex-col justify-center items-center" onSubmit={handleLogin} >
            <h2 className="text-white text-sm">We love having you back</h2>
            <input
              type="text"
              placeholder="Email"
              name= "email"
              value={loginUser.email}
              onChange={handlerLoginUser}
              className="w-56 h-8 top-2 mt-4 text-xs rounded-md px-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlerLoginUser}
              value={loginUser.password}
              name="password"
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Campos requeridos"
        className="bg-black  p-4 rounded-lg shadow-md w-[20%] mx-auto mt-20  flex flex-col items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
      >
       
        <p className="text-white">Please fill in all the fields</p>
        <button
          onClick={closeModal}
          className="bg-[#F0B90B]   text-black px-4 py-2 rounded-md  mt-4"
        >
          Close
        </button>
      </Modal>
      <Modal
        isOpen={context.isModalCreateUSer}
        onRequestClose={context.closeModalCreateUser}
        contentLabel="Campos requeridos"
        className="bg-black  p-4 rounded-lg shadow-md w-[20%] mx-auto mt-20  flex flex-col items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
      >
       
        <p className="text-white">Great! User created.</p>
        <button
          onClick={context.closeModalCreateUser}
          className="bg-[#F0B90B]   text-black px-4 py-2 rounded-md  mt-4"
        >
          Close
        </button>
      </Modal>
      <Modal
        isOpen={continueButtonModal}
        onRequestClose={closeModal}
        contentLabel="Campos requeridos"
        className="bg-black  p-4 rounded-lg shadow-md w-[25%] mx-auto mt-20  flex flex-col items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
      >
       
        <p className="text-white">Please fill in all the fields before continuing. </p>
        <button
          onClick={closeModal}
          className="bg-[#F0B90B]   text-black px-4 py-2 rounded-md  mt-4"
        >
          Close
        </button>
      </Modal>
      <Modal
        isOpen={context.isModalLoginUSer}
        onRequestClose={context.closeModalLoginUser}
        contentLabel="Campos requeridos"
        className="bg-black  p-4 rounded-lg shadow-md w-[25%] mx-auto mt-20  flex flex-col items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
      >
       
        <p className="text-white">  Welcome Login succesfull</p>
        <button
            onClick={() => {
              context.closeModalLoginUser(); // Cerrar el modal
              handlerNavigate(); // Navegar a "/"
            }}
          className="bg-[#F0B90B]   text-black px-4 py-2 rounded-md  mt-4"
        >
          Close
        </button>
      </Modal>
      <Modal
        isOpen={context.isMoldalLoginBad}
        onRequestClose={context.closeModalLoginUser}
        contentLabel="Campos requeridos"
        className="bg-black  p-4 rounded-lg shadow-md w-[25%] mx-auto mt-20  flex flex-col items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
      >
       
        <p className="text-white">Oops, check your data.</p>
        <button
          onClick={context.closeModalLoginUser}
          className="bg-[#F0B90B]   text-black px-4 py-2 rounded-md  mt-4"
        >
          Close
        </button>
      </Modal>
    </Layout>
  );
};

export default SignIn;
