import clsx from "clsx";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Bill } from "../../../types";
import { deleteBill, selectBillsToPay, showBillForm } from "../billSlice";

const BillItem = (params: Bill) => {
  const dispatch = useAppDispatch();
  const payableBills = useAppSelector(selectBillsToPay);
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <tr className="border-b">
      <td className="py-4">{params.id}</td>
      <td>{params.category}</td>
      <td className="max-w-0">{params.description}</td>
      <td>{new Date(params.date).toISOString().split("T")[0]}</td>
      <td>$ {params.amount.toFixed(2)}</td>
      <td className="max-w-1">
        <button
          onClick={() => dispatch(showBillForm(params))}
          className="text-blue-400 px-4 py-2 rounded-md ring-1 ring-blue-400 hover:bg-blue-400 hover:text-white"
        >
          <AiFillEdit />
        </button>
        <button
          onClick={() => dispatch(deleteBill(params.id))}
          className="text-red-400 px-4 py-2 rounded-md ring-1 ring-red-400 hover:bg-red-400 hover:text-white mx-2"
        >
          <AiFillDelete />
        </button>
        {payableBills.includes(params.id) && (
          <button
            onMouseOver={() => {
              setShowTooltip(true);
            }}
            onMouseOut={() => {
              setShowTooltip(false);
            }}
            className="relative text-yellow-400 px-4 py-2 rounded-md ring-1 ring-yellow-400 hover:bg-yellow-400 hover:text-white"
          >
            <GoAlert />

            <div
              className={clsx(
                "absolute z-10 w-48 right-0 top-8 flex flex-col gap-2 p-4 bg-white rounded-md shadow-md text-black",
                {
                  hidden: !showTooltip,
                }
              )}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  Pay Bill to stay under monthly limit
                </span>
              </div>
            </div>
          </button>
        )}
      </td>
    </tr>
  );
};

export default BillItem;
