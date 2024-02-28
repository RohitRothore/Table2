import React, { useState } from "react";
import DataTable from "@/components/DataTable/DataTable";
import { handleOnclick } from "@/utils/CSVProccess";
import { exportToCSV } from "@/utils/ExportCSV";

const Table = () => {
  const [items, setItems] = useState([]);
  let file = [];

  const columnsData = [
    { field: "ItemType", name: "ItemType" },
    { field: "ItemCode", name: "ItemCode" },
    { field: "ItemName", name: "ItemName", primary: true },
    { field: "HSNCode", name: "HSNCode" },
    { field: "Unit", name: "Unit" },
    { field: "OpeningBalanceDate", name: "OpeningBalanceDate", type: "Date" },
    { field: "OpeningBalanceQty", name: "OpeningBalanceQty", type: "Number" },
    { field: "MinQty", name: "MinQty", type: "Number" },
    { field: "PurchaseRate", name: "PurchaseRate", type: "Number" },
    { field: "MRP", name: "MRP", type: "Number" },
    { field: "GSTPer", name: "GSTPer", type: "Number" },
    { field: "BrandName", name: "BrandName" },
    { field: "Rake", name: "Rake" },
  ];

  const handleFileChange = (event) => {
    const dumyFile = event.target.files[0];
    file = dumyFile;
    if (!dumyFile) return;
  };

  const exportCSV = () => {
    exportToCSV(items, columnsData);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5 w-full">
      <div className="flex gap-3 items-center justify-center">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="form-control"
          id="csv-input"
        />
        <button
          onClick={(event) => {
            if (file.length !== 0) {
              handleOnclick(event, columnsData, setItems, file);
            }
          }}
          htmlFor="csv-input"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-[33px] py-2.5 text-center me-2"
        >
          Import CSV
        </button>
        <button
          onClick={exportCSV}
          className="text-white bg-gradient-to-br from-teal-500 to-teal-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-[33px] py-2.5 text-center"
        >
          Export CSV
        </button>
      </div>
      <div className="flex items-center justify-center w-[80%]">
        <DataTable columns={columnsData} rows={items} />
      </div>
    </div>
  );
};

export default Table;
