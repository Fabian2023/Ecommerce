import { createContext, useState,useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const ContextShop = createContext();

// eslint-disable-next-line react/prop-types
export const ProviderShop = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [productToShow, SetProductToShow] = useState({});
  const [carProducts, SetCarProducts] = useState([]);
  const [isOpencheckoutSideMenu, setIsOpencheckoutSideMenu] = useState(false);
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState(null);
  const [searchTitle, setSearchTitle] = useState(null);
  const[filteredItems, setFilteredItems] = useState(null);

  
  
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setItems(response.data);
      } catch (error) {
        console.error("error al obtener los datos", error);
      }
    };
    data();
  }, []);
  
  const filteredItemsBytTitle =(items, searchTitle )=>{
    return items?.filter( item=>item.title.toLowerCase().includes(searchTitle.toLowerCase()))
  }

  useEffect(()=>{
    if(searchTitle) setFilteredItems(filteredItemsBytTitle(items, searchTitle))

  },[items, searchTitle]) 

  console.log("filtereditems",filteredItems);
  

  const openProductDetail = () => {
    setIsOpenDetail(true);
  };

  const closeProductDetail = () => {
    setIsOpenDetail(false);
  };

  const openCheckoutSideMenu = () => {
    setIsOpencheckoutSideMenu(true);
  };

  const closeCheckoutSideMenu = () => {
    setIsOpencheckoutSideMenu(false);
  };

  return (
    <ContextShop.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isOpenDetail,
        productToShow,
        SetProductToShow,
        carProducts,
        SetCarProducts,
        isOpencheckoutSideMenu,
        setIsOpencheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchTitle,
        setSearchTitle,
        filteredItems,
        setFilteredItems

      }}
    >
      {children}
    </ContextShop.Provider>
  );
};
