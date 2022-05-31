import { useState } from "react";
import customers from "@/data/customers";
import Datatable from "@/ui/datatable";
import Modal from "@/ui/modal";

import CustomerForm from "./form";

export default function Customers({}) {
  const [selectedCustomer, setSelectedCustomer] = useState(false);
  const columns = Object.keys(customers[0]);

  return (
    <>
      <Datatable
        rows={customers.slice(0, 50)}
        renderRow={(row) => (
          <tr className="bg-gray-300 even:bg-gray-200 text-black">
            {columns.map((column) => (
              <th
                className="text-left p-3 font-thin"
                onClick={() => setSelectedCustomer(row)}>
                {getControl(row, column)}
              </th>
            ))}
          </tr>
        )}
      />

      {selectedCustomer && (
        <Modal close={() => setSelectedCustomer(undefined)}>
          <CustomerForm
            value={selectedCustomer}
            onChange={(values) => setSelectedCustomer(values)}
          />
          <div className="w-full flex flex-row-reverse my-8">
            <button
              onClick={() => setSelectedCustomer(undefined)}
              className="bg-blue-500 text-white font-bold rounded py-2 px-8">
              Save
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

function getControl(row, column) {
  switch (column) {
    case "address":
      return (
        <div>
          {row[column].address1} {row[column].city} {row[column].state}
        </div>
      );

    default:
      return row[column];
  }
}
