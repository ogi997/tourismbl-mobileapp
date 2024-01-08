import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/Colors/Colors";
import FavouriteIcon from "../FavouriteIcon/FavouriteIcon";
import { useSelector } from "react-redux";

const HomeHeaderComponent = () => {
  const { authenticated } = useSelector((state) => state.users);
  return (
    <View style={styles.header}>
      {authenticated && <FavouriteIcon />}

      <Text style={styles.headerText}>Let's discover Banja Luka together!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    backgroundColor: Colors.PRIMARY_COLOR,
    // borderRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,

    shadowColor: "#000",
    shadowOffset: { width: 2, height: 30 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 50,
    padding: 20,
    color: Colors.TEXT_COLOR,
  },
});

export default HomeHeaderComponent;
