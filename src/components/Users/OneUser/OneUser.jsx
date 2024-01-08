import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { IconButton, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  toggleActiveUserById,
  toggleAdminUserById,
} from "../../../../redux-store/adminUserSlice";
import Colors from "../../../utils/Colors/Colors";
import Loading from "../../Loading/Loading";

const OneUser = ({ route, navigation }) => {
  const { user, loading, blockLoading, adminLoading, deleteLoading } =
    useSelector((state) => state.adminUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const user_id = route.params.state.user_id;
      await dispatch(getUserById(user_id));
    };

    getData();
  }, []);

  const activeUserHandle = async () => {
    await dispatch(toggleActiveUserById(user.id));
  };

  const adminUserHandle = async () => {
    await dispatch(toggleAdminUserById(user.id));
  };

  const deleteUserHandle = async () => {
    await dispatch(deleteUser(user.id));
    await dispatch(getAllUsers());
    navigation.goBack();
  };

  if (loading) return <Loading />;

  return (
    <View>
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
        </View>
        <View style={styles.textHeaderContainer}>
          <Text style={styles.titleHeader}>User report</Text>
        </View>
      </View>

      <View style={styles.container}>
        <ImageBackground
          source={{ uri: user?.avatar }}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.textStyle}>First name: {user?.first_name}</Text>
        <Text style={styles.textStyle}>Last name: {user?.last_name}</Text>
        <Text style={styles.textStyle}>Username: {user?.username}</Text>
        <Text style={styles.textStyle}>Email: {user?.email}</Text>
        <Button
          mode="contained"
          onPress={adminUserHandle}
          loading={adminLoading}
          style={styles.button}
        >
          {user?.is_admin ? "Remove admin" : "Make admin"}
        </Button>
        <Button
          mode="contained"
          onPress={activeUserHandle}
          loading={blockLoading}
          style={styles.button}
        >
          {user?.is_active ? "Block" : "Unblock"}
        </Button>
        <Button
          onPress={deleteUserHandle}
          mode="contained"
          style={{ width: "100%" }}
          buttonColor={Colors.SECONDARY_COLOR}
          loading={deleteLoading}
        >
          Delete
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 165,
    paddingTop: 50,
    alignContent: "space-around",
    backgroundColor: Colors.PRIMARY_COLOR,
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
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.HIGHLIGHT_COLOR,
    margin: 5,
    width: "100%",
  },
});

export default OneUser;
