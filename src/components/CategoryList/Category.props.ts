import { ListGridType } from "antd/es/list";
import { CategoryType } from "../../helpers/interfaces/categories.interface";

export interface CategoryProps {
  categories: CategoryType[] | undefined;
  grid: ListGridType;
  loading: boolean;
}
