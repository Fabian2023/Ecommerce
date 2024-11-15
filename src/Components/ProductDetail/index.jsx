import { useContext } from "react";
import { ContextShop } from "../../Context/index";
import "./style.css";

const DetailProduct = () => {
  const context = useContext(ContextShop);

  return (
    <aside
      className={` ${
        context.isOpenDetail ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-5 border border-gray-300  rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => context.closeProductDetail()}
                
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
      </div>
        <div className="flex flex-col overflow-y-auto">
      <figure className="px-6">
        <img
          className="w-full h-56 rounded-lg border border-gray-100  shadow-xl"
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
          <span className="font-medium text-md mb-2">{context.productToShow.title}</span>
          <span className="font-light text-sm" >{context.productToShow.description}</span>
      </p>
        </div>
    </aside>
  );
};

export default DetailProduct;
