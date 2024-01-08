import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, IconButton } from "react-native-paper";
import useAsyncStorage from "../../../hooks/useAsyncStorage/useAsyncStorage";
import { useSelector } from "react-redux";

const AppBar = ({ item }) => {
  const [saveItem, setSaveItem] = useState(false);
  const navigation = useNavigation();
  const { existDataForKey, addDataByKey } = useAsyncStorage();
  const { authenticated } = useSelector((state) => state.users);

  useEffect(() => {
    const getData = async () => {
      const exist = await existDataForKey("local", item.id);
      setSaveItem(exist);
    };
    getData();
  }, []);

  if (item == null) return <ActivityIndicator />;

  return (
    <View style={styles.controls}>
      <View>
        <IconButton
          style={{ backgroundColor: "rgba(0,0,0, 0.25)" }}
          icon="arrow-left"
          iconColor={"white"}
          size={25}
          onPress={() => navigation.navigate("Home2")}
        />
      </View>
      {authenticated && (
        <View>
          <IconButton
            style={{ backgroundColor: "rgba(0,0,0, 0.25)" }}
            icon="heart"
            iconColor={saveItem ? "red" : "#c3c3c3"}
            size={25}
            onPress={async () => {
              await addDataByKey(
                "local",
                {
                  id: item?.id,
                  title: item?.title,
                  description: item?.description,
                  image: item?.image,
                },
                item?.id
              );
              setSaveItem((prev) => !prev);
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    marginTop: 60,
    marginBottom: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AppBar;
