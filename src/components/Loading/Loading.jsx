import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Colors from "../../utils/Colors/Colors";

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={"large"} color={Colors.PRIMARY_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    position: "absolute",
    top: "40%",
    left: "45%",
  },
});

export default Loading;
