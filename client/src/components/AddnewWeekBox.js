import React, { useContext, useEffect, useState } from "react";
import { WeekContext } from "../Context/weekDataContext";
import axios from "axios";

const Dropdown = ({ showDropdown, onClose }) => {
  const { weeks } =useContext(WeekContext);

  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedWeek, setSelectedWeek] = useState("");

  const orders = ["before", "after"];

  const handleOrderChange = (event) => {
    setSelectedOrder(event.target.value);
  };

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log("in function ")
    const order = selectedOrder;
    const week_number = parseInt(selectedWeek.match(/\d+/)[0]);
    await axios.post("/week", {
      order,
      week_number,
    });
    window.location.reload()
        onClose();
  };

  return (
    <div
      className={`${
        showDropdown ? "block" : "hidden"
      } absolute top-full right-0  z-10 bg-gray-200 rounded-md shadow-lg p-4 mt-16 mr-9`}
    >
      <div className=" space-y-4">
        <div className="flex gap-8">
          {/* First Dropdown - Orders */}
          <div className="relative">
            <select
              value={selectedOrder}
              onChange={handleOrderChange}
              className="block appearance-none bg-white   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select an Order</option>
              {orders.map((order) => (
                <option className="" key={order} value={order}>
                  {order}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
           
            </div>
          </div>

          {/* Second Dropdown - Weeks */}
          <div className="relative">
            <select
              value={selectedWeek}
              onChange={handleWeekChange}
              className="block appearance-none bg-white  border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select a Week</option>
              {weeks.map((week) => (
                <option key={week} value={week.week_number}>
                 Week {week.week_number}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            
            </div>
          </div>
        </div>

        <div className="grid  gap-4">
          <div>
            <p>
              New Week will be Added {selectedOrder} {selectedWeek}
            </p>
          </div>

          <div className="flex space-x-4 justify-center">
            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              onClick={(e)=>handleCreate(e)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
