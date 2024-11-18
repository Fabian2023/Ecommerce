import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { ContextShop } from "../../Context/index";
import ReactPaginate from "react-paginate";

const Home = () => {
  const context = useContext(ContextShop);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>no hay nada</div>;
    }
  };
  


  const handlePageClick = (event) => {
    context.setCurrentPage(event.selected);
  };

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
      <ReactPaginate
        previousLabel={"← Anterior"}
        nextLabel={"Siguiente →"}
        breakLabel={"..."}
        pageCount={context.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center items-center mt-4 gap-2"
        activeClassName="bg-blue-500 text-white font-bold"
        previousClassName="px-3 py-1 border rounded hover:bg-gray-200"
        nextClassName="px-3 py-1 border rounded hover:bg-gray-200"
        pageClassName="px-3 py-1 border rounded hover:bg-gray-200"
        breakClassName="px-3 py-1"
        disabledClassName="opacity-50 cursor-not-allowed"
      />

      <ProductDetail />
    </Layout>
  );
};
export default Home;
