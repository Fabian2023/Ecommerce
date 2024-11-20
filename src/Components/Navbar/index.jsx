import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContextShop } from "../../Context/index";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(ContextShop);

  

  return (
    <nav className="flex justify-between items-center  w-full py-3 px-5 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">TechPulse</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={()=>context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gaming"
            
            onClick={()=>context.setSearchByCategory("gaming")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Gaming
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/audio"
            onClick={()=>context.setSearchByCategory("audio")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Audio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mobile"
            onClick={()=>context.setSearchByCategory("mobile")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mobile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tv"
            onClick={()=>context.setSearchByCategory("tv")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tv
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/laptop"
            onClick={()=>context.setSearchByCategory("laptop")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Laptop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/appliances"
            onClick={()=>context.setSearchByCategory("appliances")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
           Appliances
          </NavLink>
        </li>
       
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">fasalpe34@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders/last"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SignIn"
            onClick={() => context.setSingInisOpen(true)}  
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center gap-1 ">
          <ShoppingCartIcon className="h-4 w-4 text-black"></ShoppingCartIcon>
          <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
