import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import $axios from "../../../utils/axios";
import { API_URL } from "../../../utils/consts";
import { AxiosError } from "axios";
import { DishesType } from "../../../helpers/interfaces/dishes.interface";

interface DishState {
  dishesBySubcategory: { [subcategoryId: number]: DishesType[] };
}

const initialState: DishState = {
  dishesBySubcategory: {},
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setDish: (
      state,
      action: PayloadAction<{ subcategoryId: number; dishes: DishesType[] }>
    ) => {
      state.dishesBySubcategory[action.payload.subcategoryId] =
        action.payload.dishes;
    },
    resetDishes: (state) => {
      state.dishesBySubcategory = {};
    },
  },
});

export const fetchDish = createAsyncThunk<
  { subcategoryId: number; dishes: DishesType[] },
  number,
  { rejectValue: unknown }
>(
  "category/fetchDish",
  async (subcategoryId, { dispatch, rejectWithValue }) => {
    try {
      const response = await $axios.get(
        `${API_URL}/subcategories/${subcategoryId}/dishes/`
      );
      const data: { subcategoryId: number; dishes: DishesType[] } = {
        subcategoryId,
        dishes: response.data,
      };
      dispatch(dishSlice.actions.setDish(data));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch dishes"
        );
      }
      throw error;
    }
  }
);

export const { setDish, resetDishes } = dishSlice.actions;
export default dishSlice.reducer;
