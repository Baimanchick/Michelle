import React from "react";
import { List } from "antd";
import { CategoryProps } from "./Category.props";
import CategoryCard from "../CategoryCard/CategoryCard";

function CategoryList({ categories, grid }: CategoryProps) {
    return (
        <List
            size={"small"}
            grid={grid}
            loading={!categories}
            dataSource={categories}
            renderItem={(item) => (
                <List.Item
                    key={item.id}
                    style={{
                        background: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        padding: 0,
                    }}
                >
                    <CategoryCard category={item} />
                </List.Item>
            )}
        />
    );
}

export default React.memo(CategoryList);
