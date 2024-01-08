import { View } from "react-native";
import { IconButton } from "react-native-paper";
import { FAVOURITE } from "../../utils/Images/Images";
import { useNavigation } from "@react-navigation/native";

const FavouriteIcon = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: "flex-end",
      }}
    >
      <IconButton
        icon={FAVOURITE}
        style={{ marginLeft: 20 }}
        iconColor={"black"}
        size={25}
        onPress={() => navigation.navigate("favourite")}
      />
    </View>
  );
};

export default FavouriteIcon;
