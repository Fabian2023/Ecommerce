import { useContext} from "react";
import { Link } from "react-router-dom";

import { ContextShop } from "../../Context/index";
import OrderCard from "../OrderCard/index";
import "./styles.css";
import { totalPrice } from "../../Utils";

const CheckoutSideMenu = () => {
  const context = useContext(ContextShop);

  if (context.singInisOpen) return null;

  const deleteOrder = (id) => {
    const deleteProducts = context.carProducts.filter(
      (product) => product.id != id
    );
    context.setCount(context.count - 1);
    context.SetCarProducts(deleteProducts);
  };

  const handleCheout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.carProducts,
      totalProducts: context.carProducts.length,
      totalPrice: totalPrice(context.carProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.SetCarProducts([]);
    context.setSearchTitle(null)
  };

  const closeMenu = () => {
    context.closeCheckoutSideMenu();
    context.setCount(0)
  };

  return (
    <aside
      className={`Checkout-side-menu flex flex-col fixed left-5 border border-gray-300 rounded-lg bg-white transition-transform ${
        context.singInisOpen
          ? "translate-x-full" // Oculta el menú si singInisOpen está activo
          : context.isOpencheckoutSideMenu
          ? "translate-x-0" // Muestra el menú si está abierto
          : "hidden" // Oculta completamente si no está abierto
      }`}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2 className="font-medium text-xl">My Order</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-5 h-5 cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="px-2 overflow-y-auto flex-1">
        {context.carProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            deleteOrder={deleteOrder}
          />
        ))}
      </div>
      <div className="px-4 mb-4">
        <p className="flex justify-between items-center mb-2 ">
          <span className=" font-semibold text-xl ">Total:</span>
          <span className=" text-medium text-xl text-orange-950 font-bold  ">
            ${totalPrice(context.carProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
        <button
            className=" w-full bg-black py-3 text-white rounded-lg"
            onClick={() => {
              handleCheout();
              closeMenu();
            }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
