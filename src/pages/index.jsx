import Layout from "@/features/layout";
import Toolbar from "@/features/toolbar";
import Customers from "@/features/customers";

export default function Homepage() {
  return (
    <Layout>
      <Toolbar />

      <div className="absolute left-24 overflow-y-auto w-full h-full">
        <div className=" w-3/4 mx-auto mt-32 shadow-lg">
          <Customers />
        </div>
      </div>
    </Layout>
  );
}
