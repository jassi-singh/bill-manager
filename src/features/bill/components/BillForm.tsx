import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { Categories } from "../../../types";

import {
  addBill,
  hideBillForm,
  selectBillForm,
  selectFormType,
  selectShowBillForm,
  updateBill,
  updateFormBill,
} from "../billSlice";

const BillForm = () => {
  const dispatch = useDispatch();
  const showForm = useAppSelector(selectShowBillForm);
  const bill = useAppSelector(selectBillForm);
  const formType = useAppSelector(selectFormType);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formType === "edit" ? dispatch(updateBill()) : dispatch(addBill(bill));
  };

  return (
    <div
      // onClick={() => dispatch(toggleBillForm())}
      className={clsx(
        "absolute w-screen h-screen bg-black/50 flex place-content-center",
        {
          hidden: !showForm,
        }
      )}
    >
      <div className="bg-white w-96 h-fit drop-shadow-lg rounded-lg p-4 mt-16">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-400">
            {formType === "add" ? "Add" : "Edit"} Bill
          </h1>
          <button
            onClick={() => dispatch(hideBillForm())}
            className="text-xl text-red-400"
          >
            x
          </button>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-4 text-sm">
          <div
            className={clsx("flex flex-col gap-2", {
              hidden: formType === "add",
            })}
          >
            <label htmlFor="id">Id</label>
            <input
              readOnly
              value={bill.id}
              className="bg-blue-100/50 px-4 py-2 rounded-md"
              type="text"
              name="id"
              id="id"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <select
              className="bg-blue-100/50 px-4 py-2 rounded-md"
              name="category"
              id="category"
              value={bill.category}
              onChange={(e) => {
                dispatch(
                  updateFormBill({
                    ...bill,
                    category: e.target.value as Categories,
                  })
                );
              }}
            >
              {Object.values(Categories).map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <input
              className="bg-blue-100/50 px-4 py-2 rounded-md"
              type="text"
              name="description"
              id="description"
              value={bill.description}
              onChange={(e) => {
                dispatch(
                  updateFormBill({ ...bill, description: e.target.value })
                );
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="amount">Amount</label>
            <input
              className="bg-blue-100/50 px-4 py-2 rounded-md"
              type="number"
              name="amount"
              id="amount"
              value={bill.amount}
              onChange={(e) => {
                dispatch(
                  updateFormBill({ ...bill, amount: Number(e.target.value) })
                );
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date">Date</label>
            <input
              className="bg-blue-100/50 px-4 py-2 rounded-md"
              type="date"
              name="date"
              id="date"
              value={new Date(bill.date).toISOString().split("T")[0]}
              onChange={(e) => {
                dispatch(
                  updateFormBill({
                    ...bill,
                    date: new Date(e.target.value).getTime(),
                  })
                );
              }}
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
              {formType === "add" ? "Add" : "Edit"} Bill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillForm;
