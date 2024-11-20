import Layout from "../../Components/Layout"
import { useContext} from "react";
import {Link} from "react-router-dom"
import { ContextShop } from "../../Context/index";
import OrderCard from "../../Components/OrderCard/index";


const MyOrders= ()=>{
    const context = useContext(ContextShop);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
    // eslint-disable-next-line no-const-assign
    if(index === 'last') index= context.order?.length -1
    
    return(
        <Layout>
          <div className="flex gap-20 mb-9">
        <Link to="/my-orders">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
            />
        </svg>
        </Link>
            <h1> My Order</h1>
      </div>
             <div className="flex flex-col w-80 ">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price} 
          />
        ))}
      </div>
        </Layout>
    )

}
export default MyOrders