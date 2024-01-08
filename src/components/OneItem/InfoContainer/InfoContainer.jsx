import { View, Text, StyleSheet } from "react-native";
import useReverseGeocode from "../../../hooks/useReverseGeocode/useReverseGeocode";
const InfoContainer = ({ item }) => {
  const { address } = useReverseGeocode(item.geometry.coordinates);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles?.description}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    marginTop: -55,
    marginHorizontal: "12.5%",
    borderRadius: 35,
    // borderBottomLeftRadius: 35,
    // borderBottomRightRadius: 35,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.TEXT_COLOR,
  },
  description: {
    fontSize: 12,
    fontStyle: "italic",
    color: Colors.TEXT_COLOR,
  },
  directionFormat: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7,
  },
  alignStart: {
    alignItems: "flex-start",
  },
});

export default InfoContainer;
