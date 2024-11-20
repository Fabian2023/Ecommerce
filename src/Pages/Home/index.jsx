import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { ContextShop } from "../../Context/index";
//import ReactPaginate from "react-paginate";

const Home = () => {
  const context = useContext(ContextShop);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>No hay productos disponibles🚀</div>;
    }
  };
  


  // const handlePageClick = (event) => {
  //   context.setCurrentPage(event.selected);
  // };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-lg"> Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product... "
        className="mb-4  w-80 h-10 border border-black rounded-lg focus:outline-none p-3"
        onChange={(e) => context.setSearchTitle(e.target.value)}
      />

      <div className="grid gap-4  grid-cols-3 ">{renderView()}</div>
      <ProductDetail />
    </Layout>
  );
};
export default Home;
