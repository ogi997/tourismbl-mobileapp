import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { IconButton, Button } from "react-native-paper";
import Colors from "../../utils/Colors/Colors";
import useAsyncStorage from "../../hooks/useAsyncStorage/useAsyncStorage";

const FavouriteHeader = ({ setDataHotels }) => {
  const navigation = useNavigation();
  const { clearByKey } = useAsyncStorage();

  return (
    <View style={styles.header}>
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
            iconColor="white"
            icon="arrow-left"
            onPress={() => navigation.goBack()}
          />
          <Button
            mode="outlined"
            textColor={Colors.TEXT_COLOR}
            onPress={async () => {
              await clearByKey("local");
              setDataHotels(null);
            }}
          >
            Clear
          </Button>
        </View>
        <Text style={styles.headerText}>Your favourite locations</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.PRIMARY_COLOR,
    padding: 20,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  headerText: {
    marginTop: 30,
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 27,
    color: Colors.TEXT_COLOR,
  },
});

export default FavouriteHeader;
