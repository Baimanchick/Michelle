import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/category/categoriesSlice";
import oneSubCategoryReducer from "./features/category/oneSubCategory";
import dishReducer from "./features/dish/dishesSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    oneSubCategory: oneSubCategoryReducer,
    dish: dishReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
