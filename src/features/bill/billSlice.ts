import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Bill, Categories } from "../../types";

export interface BillState {
  bills: Array<Bill>;
  showBillForm: boolean;
  billForm: Bill;
  count: number;
  formType: "edit" | "add";
}

const initialState: BillState = {
  bills: [
    {
      id: 1,
      description: "Dominoes are very good this is the best food",
      category: Categories.FoodNDining,
      amount: 430,
      date: new Date().getTime(),
    },
    {
      id: 2,
      description: "Car wash",
      category: Categories.Utility,
      amount: 500,
      date: new Date().getTime(),
    },
  ],
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
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  addBill,
  deleteBill,
  showBillForm,
  hideBillForm,
  updateFormBill,
  updateBill,
} = billSlice.actions;

export const selectBillList = (state: RootState) => state.bill.bills;
export const selectShowBillForm = (state: RootState) => state.bill.showBillForm;
export const selectBillForm = (state: RootState) => state.bill.billForm;
export const selectFormType = (state: RootState) => state.bill.formType;
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default billSlice.reducer;
