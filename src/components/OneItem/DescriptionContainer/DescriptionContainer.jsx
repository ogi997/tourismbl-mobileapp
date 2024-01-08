import { View, Text, StyleSheet } from "react-native";

const DescriptionContainer = ({ item }) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.infoTitle}>Description</Text>

      <Text style={styles.infoDescription}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.TEXT_COLOR,
  },
  infoDescription: {
    fontSize: 15,
    fontStyle: "italic",
    color: Colors.TEXT_COLOR,
    marginHorizontal: 7,
  },
});

export default DescriptionContainer;
