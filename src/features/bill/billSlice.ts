import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Bill, Categories } from "../../types";

export interface BillState {
  bills: Array<Bill>;
  showBillForm: boolean;
  billForm: Bill;
  count: number;
  formType: "edit" | "add";
  selectedCategory: Categories | "All Categories";
}

const initialState: BillState = {
  bills: [],
  billForm: {
    id: 0,
    description: "",
    category: Categories.FoodNDining,
    amount: 0,
    date: new Date().getTime(),
  },
  showBillForm: false,
  count: 2,
  formType: "add",
  selectedCategory: "All Categories",
};

export const billSlice = createSlice({
  name: "bill",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addBill: (state, action: PayloadAction<Bill>) => {
      state.bills.push({ ...action.payload, id: state.count + 1 });
      state.showBillForm = false;
      state.billForm = initialState.billForm;
      state.count++;
    },
    updateBill: (state) => {
      const index = state.bills.findIndex(
        (bill) => bill.id === state.billForm.id
      );
      state.bills[index] = state.billForm;
      state.showBillForm = false;
      state.billForm = initialState.billForm;
    },
    deleteBill: (state, action: PayloadAction<number>) => {
      state.bills = state.bills.filter((bill) => bill.id !== action.payload);
    },
    showBillForm: (state, action: PayloadAction<Bill | undefined>) => {
      if (action.payload !== undefined) {
        state.billForm = action.payload;
        state.formType = "edit";
      } else state.formType = "add";

      state.showBillForm = true;
    },
    hideBillForm: (state) => {
      state.showBillForm = false;
      state.billForm = initialState.billForm;
    },
    updateFormBill: (state, action: PayloadAction<Bill>) => {
      state.billForm = action.payload;
    },
    changeCategory: (
      state,
      action: PayloadAction<Categories | "All Categories">
    ) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  addBill,
  deleteBill,
  showBillForm,
  hideBillForm,
  updateFormBill,
  updateBill,
  changeCategory,
} = billSlice.actions;

export const selectBillList = (state: RootState) =>
  state.bill.selectedCategory === "All Categories"
    ? state.bill.bills
    : state.bill.bills.filter(
        (bill) => bill.category === state.bill.selectedCategory
      );
export const selectShowBillForm = (state: RootState) => state.bill.showBillForm;
export const selectBillForm = (state: RootState) => state.bill.billForm;
export const selectFormType = (state: RootState) => state.bill.formType;
export const selectTotalAmount = (state: RootState) => {
  return state.bill.selectedCategory === "All Categories"
    ? state.bill.bills.reduce((acc, bill) => acc + bill.amount, 0)
    : state.bill.bills
        .filter((bill) => bill.category === state.bill.selectedCategory)
        .reduce((acc, bill) => acc + bill.amount, 0);
};
export const selectTotalAmountByMonth = (state: RootState) => {
  const bills =
    state.bill.selectedCategory === "All Categories"
      ? state.bill.bills
      : state.bill.bills.filter(
          (bill) => bill.category === state.bill.selectedCategory
        );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const totalAmountByEachMonth = months.map((month) => {
    const billsByMonth = bills.filter(
      (bill) => new Date(bill.date).getMonth() === months.indexOf(month)
    );
    return {
      month,
      amount: billsByMonth.reduce((acc, bill) => acc + bill.amount, 0),
    };
  });
  return totalAmountByEachMonth;
};

export default billSlice.reducer;
