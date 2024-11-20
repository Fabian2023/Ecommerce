import Layout from "../../Components/Layout";

const SignIn = () => {
  return (
    <Layout>
      <div>
        <form className="flex flex-col">
          <input type="text" placeholder="Mail" className=" w-56 h-8 border-2 rounded-md px-2 "/>
          <input type="text" placeholder="Password" className=" w-56 h-8 border-2 rounded-md px-2 mt-3" />
          <button className="mt-3 border-2 rounded-md h-10">Continue</button>
        </form>
      </div>
    </Layout>
  );
};
export default SignIn;
