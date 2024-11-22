import { useRoutes, BrowserRouter } from "react-router-dom";
import {ProviderShop} from "../../Context";
import Home from "../Home";
import Account from "../Account";
import MyOrder from "../MyOrder";
import NotFound from "../NotFound";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/ChecksideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/gaming", element: <Home /> },
    { path: "/audio", element: <Home /> },
    { path: "/mobile", element: <Home /> },
    { path: "/tv", element: <Home /> },
    { path: "/laptop", element: <Home /> },
    { path: "/appliances", element: <Home /> },
    { path: "/Account", element: <Account /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ProviderShop>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ProviderShop>
  );
};
export default App;
