import React, { useCallback, useEffect } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import { DataTable, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationUpdateRequest } from "../../../redux-store/adminLocationUpdateSlice";
import Loading from "../Loading/Loading";
import Colors from "../../utils/Colors/Colors";

const UpdateLocations = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { requestUpdateLocations, loading } = useSelector(
    (state) => state.adminLocationUpdate
  );
  const openUpdateLocationHandle = (id) => {
    navigation.navigate("UpdateLocation", {
      state: { update_location_id: id },
    });
  };

  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllLocationUpdateRequest());
    };
    getData();
  }, []);

  const onRefresh = useCallback(async () => {
    await dispatch(getAllLocationUpdateRequest());
  });

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[Colors.PRIMARY_COLOR]}
          refreshing={loading}
          onRefresh={onRefresh}
        />
      }
    >
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Description</DataTable.Title>
          <DataTable.Title>Action</DataTable.Title>
        </DataTable.Header>

        {requestUpdateLocations.map((item) => (
          <DataTable.Row
            key={item.id}
            style={{ borderColor: Colors.TEXT_COLOR }}
          >
            <DataTable.Cell>{item.title}</DataTable.Cell>
            <DataTable.Cell>{item.description}</DataTable.Cell>
            <DataTable.Cell>
              <Button
                style={styles.button}
                mode={"contained"}
                onPress={() => openUpdateLocationHandle(item.id)}
              >
                Open
              </Button>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tableHeader: {
    backgroundColor: Colors.PRIMARY_COLOR,
    borderColor: Colors.TEXT_COLOR,
  },
  button: {
    backgroundColor: Colors.SECONDARY_COLOR,
  },
});
export default UpdateLocations;
