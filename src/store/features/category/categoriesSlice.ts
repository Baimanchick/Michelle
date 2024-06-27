import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import $axios from "../../../utils/axios";
import { AxiosError } from "axios";
import {
  CategoryType,
  SubCategoryType,
} from "../../../helpers/interfaces/categories.interface";
import { API_URL } from "../../../utils/consts";

interface CategoryState {
  category: CategoryType[];
  subcategories: SubCategoryType[];
}

const initialState: CategoryState = {
  category: [],
  subcategories: [],
};

const categoryCardlSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (
      state: CategoryState,
      action: PayloadAction<CategoryType[]>
    ) => {
      state.category = action.payload;
    },
    setSubcategories: (
      state: CategoryState,
      action: PayloadAction<SubCategoryType[]>
    ) => {
      state.subcategories = action.payload;
    },
  },
});

export const fetchCategory = createAsyncThunk<unknown, void>(
  "category/fetchCategory",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await $axios.get(`${API_URL}/categories/`);
      dispatch(categoryCardlSlice.actions.setCategory(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response!.data.message);
      }
    }
  }
);

export const fetchSubcategory = createAsyncThunk<unknown, void>(
  "category/fetchCategory",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await $axios.get(`${API_URL}/subcategories/`);
      dispatch(categoryCardlSlice.actions.setSubcategories(data.results));
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response!.data.message);
      }
    }
  }
);
export const { setCategory } = categoryCardlSlice.actions;
export default categoryCardlSlice.reducer;
