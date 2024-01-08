import { View, StyleSheet } from "react-native";
import Colors from "../../utils/Colors/Colors";
import HomeHeaderComponent from "../../components/HomeHeader/HomeHeaderComponent";
import CategoryList from "../../components/Category/CategoryList";
import ItemList from "../../components/Items/ItemList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux-store/choiceSlice";
import { getAllLocations } from "../../../redux-store/locationsSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.locations);
  useEffect(() => {
    const getData = async () => {
      await dispatch(getCategories());
      await dispatch(getAllLocations({ category: "ALL" }));
    };
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <HomeHeaderComponent />

      <View style={styles.categories}>
        <CategoryList />
      </View>

      <View style={styles.items}>
        <ItemList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  categories: {
    marginVertical: 10,
  },
  items: {
    padding: 25,
    borderRadius: 35,
    height: "48%",
  },
});

export default HomeScreen;
