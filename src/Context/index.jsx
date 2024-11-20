import { createContext, useState, useEffect } from "react";

export const ContextShop = createContext();

// eslint-disable-next-line react/prop-types
export const ProviderShop = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [productToShow, SetProductToShow] = useState({});
  const [carProducts, SetCarProducts] = useState([]);
  const [isOpencheckoutSideMenu, setIsOpencheckoutSideMenu] = useState(false);
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]); // Productos actuales de la página
  const [searchTitle, setSearchTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // Página actual

  // Fetch para cargar productos por página
  const fetchProducts = async (category = null) => {
    try {
      let url = "https://fakestoreapi.in/api/products?limit=150";

      if (category) {
        url = `https://fakestoreapi.in/api/products/category?type=${category}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "SUCCESS") {
        setItems(data.products);
      } else {
        console.error("Error en la API:", data.message);
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    // Cargar productos de la primera página al montar el contexto
    fetchProducts();
  }, []);

  // Filtro por título
  const filteredItemsByTitle = (items, searchTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchTitle?.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category?.toLowerCase().includes(searchByCategory?.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchTitle, searchByCategory) => {
    if (searchType === "by_title") {
      return filteredItemsByTitle(items, searchTitle);
    }
    if (searchType === "by_category") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "by_title_and_category") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchTitle && searchByCategory) {
      setFilteredItems(
        filterBy("by_title_and_category", items, searchTitle, searchByCategory)
      );
    } else if (searchTitle && !searchByCategory) {
      setFilteredItems(
        filterBy("by_title", items, searchTitle, searchByCategory)
      );
    } else if (!searchTitle && searchByCategory) {
      setFilteredItems(
        filterBy("by_category", items, searchTitle, searchByCategory)
      );
    } else {
      setFilteredItems(filterBy(null, items, searchTitle, searchByCategory));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, searchTitle, searchByCategory]);

  const openProductDetail = () => setIsOpenDetail(true);
  const closeProductDetail = () => setIsOpenDetail(false);
  const openCheckoutSideMenu = () => setIsOpencheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsOpencheckoutSideMenu(false);

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
        setFilteredItems,
        currentPage,
        setCurrentPage,
        // totalPages,
        fetchProducts,
        setSearchByCategory,
        searchByCategory,
        filteredItemsByCategory,
      }}
    >
      {children}
    </ContextShop.Provider>
  );
};
