import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../utils/Colors/Colors";
import { useDispatch } from "react-redux";
import { getAllLocations } from "../../../redux-store/locationsSlice";

const CategoryItem = ({ item, index, active, setActiveCategoryId }) => {
  const dispatch = useDispatch();

  const categoryPressHandle = async (code) => {
    setActiveCategoryId(code);
    await dispatch(getAllLocations({ category: code }));
  };
  return (
    <Pressable
      onPress={() => categoryPressHandle(item.code)}
      style={[
        styles.container,
        index === "ALL" ? { marginLeft: 20 } : { marginLeft: 10 },
        active
          ? {
              backgroundColor: Colors.PRIMARY_COLOR,
            }
          : {
              backgroundColor: Colors.SECONDARY_COLOR,
            },
      ]}
    >
      <View style={styles.center}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
    borderRadius: 35,
    margin: 7,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 30 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
  },
  text: {
    color: Colors.TEXT_COLOR,
    fontWeight: "bold",
  },
  center: {
    alignItems: "center",
  },
});

export default CategoryItem;
