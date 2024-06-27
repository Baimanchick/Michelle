import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import $axios from "../../../utils/axios";
import { API_URL } from "../../../utils/consts";
import { AxiosError } from "axios";
import { SubCategoryType } from "../../../helpers/interfaces/categories.interface";

interface oneSubCategoryState {
  oneSubCategory: SubCategoryType[];
  // loading: boolean;
}

const initialState: oneSubCategoryState = {
  oneSubCategory: [],
  // loading: false,
};

const oneSubCategorySlice = createSlice({
  name: "oneSubCategory",
  initialState,
  reducers: {
    setOneSubCategory: (
      state,
      action: PayloadAction<{ oneSubCategory: SubCategoryType[] }>
    ) => {
      state.oneSubCategory = action.payload.oneSubCategory;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchOneSubCateogory.pending, (state, action) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchOneSubCateogory.fulfilled, (state, action) => {
  //     state.loading = false;
  //   });
  //   builder.addCase(fetchOneSubCateogory.rejected, (state, action) => {
  //     state.loading = false;
  //   });
  // },
});

export const fetchOneSubCateogory = createAsyncThunk<
  { oneSubCategory: SubCategoryType[] },
  number,
  { rejectValue: unknown }
>(
  "category/fetchOneSubCateogory",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await $axios.get(
        `${API_URL}/categories/${id}/subcategories/`
      );
      const data: { oneSubCategory: SubCategoryType[] } = {
        oneSubCategory: response.data,
      };
      dispatch(oneSubCategorySlice.actions.setOneSubCategory(data));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch oneSubCategory"
        );
      }
      throw error;
    }
  }
);

export const { setOneSubCategory } = oneSubCategorySlice.actions;
export default oneSubCategorySlice.reducer;
