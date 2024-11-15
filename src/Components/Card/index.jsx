import { useContext } from "react";
import { ContextShop } from "../../Context/index";

const Card = (data) => {
  const context = useContext(ContextShop);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.SetProductToShow(productDetail);
  };
  const addProductsToCar = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.SetCarProducts([...context.carProducts, productData]);
    context.openCheckoutSideMenu();
    //context.closeProductDetail()
  };

  const renderIcon = (id) => {
    const isInCar =
      context.carProducts.filter(product => product.id === id).length > 0
    if (isInCar) {
      return (
        <div  className="absolute top-0 right-0 flex justify-center items-center m-2 p-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#eb5e28"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center m-2 p-0.5"
          onClick={(event) => addProductsToCar(event, data.data)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#eb5e28"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-gray-100 cursor-pointer w-56 h-60 rounded-lg shadow-xl border border-gray-300 "
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.4 ">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.image}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light px-2 truncate">
          {data.data.title}
        </span>
        <span className="text-lg font-medium mt-[-6px] px-2">
          ${data.data.price}
        </span>
      </p>
    </div>
  );
};

export default Card;
