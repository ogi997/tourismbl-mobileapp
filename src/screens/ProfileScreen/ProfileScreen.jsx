import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../../utils/Colors/Colors";
import { IconButton, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ProfileImage from "../../components/Profile/ProfileImage/ProfileImage";
import ProfileForm from "../../components/Profile/ProfileForm/ProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux-store/userSlice";
import { getAllLocations } from "../../../redux-store/locationsSlice";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);

  const logoutHandle = async () => {
    dispatch(logout());
    await dispatch(getAllLocations({ category: "ALL" }));
  };

  return (
    <ScrollView behavior="padding">
      <View style={styles.form}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              style={{ marginHorizontal: 20 }}
              icon={"arrow-left"}
              containerColor="rgba(0,0,0,0.3)"
              iconColor="white"
              onPress={() => navigation.goBack()}
            />

            <Button
              mode="outlined"
              icon={"logout"}
              textColor={Colors.TEXT_COLOR}
              onPress={logoutHandle}
            >
              Logout
            </Button>
          </View>
          <View style={styles.textHeaderContainer}>
            <Text style={styles.titleHeader}>Profile</Text>
          </View>
        </View>

        <ProfileImage user={user} />

        <ProfileForm user={user} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 165,
    paddingTop: 50,
    alignContent: "space-around",
    backgroundColor: Colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  titleHeader: {
    fontSize: 28,
    color: Colors.TEXT_COLOR,
    fontWeight: "bold",
  },
  textHeaderContainer: {
    alignItems: "center",
  },
  form: {
    marginBottom: 100,
    gap: 10,
  },
});

export default ProfileScreen;
