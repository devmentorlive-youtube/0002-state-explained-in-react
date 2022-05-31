import { useContext } from "react";

import Layout from "@/features/layout";
import Toolbar from "@/features/toolbar";
import Customers from "@/features/customers";

import { ToolbarProvider, ToolbarContext } from "@/features/toolbar";

export default function Homepage() {
  return (
    <ToolbarProvider>
      <Layout>
        <Toolbar />

        <ContentPane>
          <Customers />
        </ContentPane>
      </Layout>
    </ToolbarProvider>
  );
}

function ContentPane({ children }) {
  const { open } = useContext(ToolbarContext);
  return (
    <div className={`absolute w-full h-full ${open ? "left-24" : ""}`}>
      <div className=" w-3/4 mx-auto mt-32 shadow-lg">{children}</div>
    </div>
  );
}
