import { View, Text, StyleSheet } from "react-native";

const NoData = () => {
  return (
    <View style={styles.errorMessage}>
      <Text style={styles.errorMessageStyle}>
        There is no data for preview!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    marginHorizontal: 20,
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.SECONDARY_COLOR,
    marginTop: 25,
    borderRadius: 35,
  },
  errorMessageStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e3e3e3",
  },
});

export default NoData;
