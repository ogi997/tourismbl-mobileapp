import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { IconButton, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocationUpdateRequestById,
  deleteLocationUpdateRequestById,
  getAllLocationUpdateRequest,
} from "../../../../redux-store/adminLocationUpdateSlice";
import Loading from "../../Loading/Loading";
import { updateLocationById } from "../../../../redux-store/adminLocationSlice";
import Colors from "../../../utils/Colors/Colors";

const OneUpdateLocation = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { requestLocation, loading, deleteLoading } = useSelector(
    (state) => state.adminLocationUpdate
  );
  const { updateLoading } = useSelector((state) => state.adminLocation);
  useEffect(() => {
    const getData = async () => {
      const location_update_id = route.params.state.update_location_id;
      await dispatch(getLocationUpdateRequestById({ id: location_update_id }));
    };

    getData();
  }, []);

  const updateLocationHandle = async () => {
    await dispatch(updateLocationById({ id: requestLocation.id_update }));
    await dispatch(getAllLocationUpdateRequest());

    navigation.goBack();
  };

  const deleteLocationUpdateHandle = async () => {
    await dispatch(deleteLocationUpdateRequestById({ id: requestLocation.id }));
    await dispatch(getAllLocationUpdateRequest());
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
          <Text style={styles.titleHeader}>Update location report</Text>
        </View>
      </View>

      <View style={styles.container}>
        <ImageBackground
          source={{ uri: requestLocation?.image }}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.textStyle}>Title: {requestLocation?.title}</Text>
        <Text style={styles.textStyle}>
          Description: {requestLocation?.description}
        </Text>
        <Text style={styles.textStyle}>
          Category: {requestLocation?.category}
        </Text>
        <Text style={styles.textStyle}>
          Visibility: {requestLocation?.visibility}
        </Text>
        {/* <Text style={styles.textStyle}>User: {requestLocation?.last_user}</Text> */}
        <Button
          mode="contained"
          onPress={updateLocationHandle}
          loading={updateLoading}
          style={styles.button}
        >
          Approved
        </Button>
        <Button
          mode="contained"
          onPress={deleteLocationUpdateHandle}
          loading={deleteLoading}
          style={{ width: "100%", backgroundColor: Colors.SECONDARY_COLOR }}
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

export default OneUpdateLocation;
