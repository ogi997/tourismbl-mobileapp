import { useState } from "react";
import { FlatList } from "react-native";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const [activeCategoryId, setActiveCategoryId] = useState("ALL");
  const { categories } = useSelector((state) => state.choices);

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <CategoryItem
            item={item}
            index={index}
            active={item.code === activeCategoryId}
            setActiveCategoryId={setActiveCategoryId}
          />
        );
      }}
      keyExtractor={(category) => category.code}
    />
  );
};

export default CategoryList;
