import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { IconButton, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  activeLocationById,
  deleteLocationById,
  getAllLocations,
  getLocationById,
} from "../../../../redux-store/adminLocationSlice";
import Loading from "../../Loading/Loading";
import Colors from "../../../utils/Colors/Colors";

const OneLocation = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { location, loading, activeLoading, deleteLoading } = useSelector(
    (state) => state.adminLocation
  );
  useEffect(() => {
    const getData = async () => {
      const location_id = route.params.state.location_id;
      await dispatch(getLocationById({ id: location_id }));
    };

    getData();
  }, []);

  const activeLocationHandle = async () => {
    await dispatch(activeLocationById(location.id));
  };

  const deleteLocationHandle = async () => {
    await dispatch(deleteLocationById(location.id));
    await dispatch(getAllLocations());
    navigation.goBack();
  };

  if (loading) return <Loading />;
  console.log(location?.active);
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
          <Text style={styles.titleHeader}>Location report</Text>
        </View>
      </View>

      <View style={styles.container}>
        <ImageBackground
          source={{ uri: location?.image }}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.textStyle}>Title: {location?.title}</Text>
        <Text style={styles.textStyle}>
          Description: {location?.description}
        </Text>
        <Text style={styles.textStyle}>Category: {location?.category}</Text>
        {/* <Text style={styles.textStyle}>User: {location?.last_user}</Text> */}
        <Button
          mode="contained"
          onPress={activeLocationHandle}
          style={styles.button}
          loading={activeLoading}
        >
          {location?.active ? "Block location" : "Unblock location"}
        </Button>
        <Button
          mode="contained"
          onPress={deleteLocationHandle}
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
    width: "100%",
    backgroundColor: Colors.HIGHLIGHT_COLOR,
  },
});

export default OneLocation;
