import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { useContext } from "react";
import { ContextShop } from "../../Context/index";
import { Link } from "react-router-dom";

const Orders = () => {
  const context = useContext(ContextShop);
  
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4" >
            <h1 className="font-medium text-lg"> My Orders</h1>
      </div>
      {context.order.map((order, index) => (

        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
      
    </Layout>
  );
};
export default Orders;