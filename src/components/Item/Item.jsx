import { Text, StyleSheet, Pressable } from "react-native";
import { Card } from "react-native-paper";
import Colors from "../../utils/Colors/Colors";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item, id }) => {
  const navigation = useNavigation();
  const handlePress = (itemID) => {
    navigation.navigate("item", {
      itemId: itemID,
    });
  };
  return (
    <Pressable onPress={() => handlePress(id)}>
      <Card style={{ marginBottom: 25 }}>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Content style={{ padding: 15 }}>
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.textDescription}>{item.description}</Text>
        </Card.Content>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    marginBottom: 15,
    padding: 20,
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
  },
  left: {
    justifyContent: "center",
    width: "30%",
  },
  right: {
    justifyContent: "center",
    padding: 15,
    width: "70%",
  },
  cardContainer: {
    marginBottom: 15,
    padding: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.TEXT_COLOR,
  },
  textDescription: {
    fontSize: 15,
    fontStyle: "italic",
    color: Colors.TEXT_COLOR,
  },
  avatar: {
    backgroundColor: "transparent",
  },
});

export default Item;
