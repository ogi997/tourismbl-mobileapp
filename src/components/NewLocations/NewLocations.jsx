import React, { useCallback, useEffect } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import { DataTable, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocations } from "../../../redux-store/adminLocationSlice";
import Loading from "../Loading/Loading";
import Colors from "../../utils/Colors/Colors";

const NewLocations = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { locations, loading } = useSelector((state) => state.adminLocation);
  const openLocationHandle = (id) => {
    navigation.navigate("OneLocation", { state: { location_id: id } });
  };
  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllLocations());
    };

    getData();
  }, []);

  const onRefresh = useCallback(async () => {
    await dispatch(getAllLocations());
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

        {locations.map((item) => (
          <DataTable.Row
            key={item.id}
            style={{ borderColor: Colors.TEXT_COLOR }}
          >
            <DataTable.Cell>{item.title}</DataTable.Cell>
            <DataTable.Cell>{item.description}</DataTable.Cell>
            <DataTable.Cell>{item.username}</DataTable.Cell>
            <DataTable.Cell>
              <Button
                style={styles.button}
                mode={"contained"}
                onPress={() => openLocationHandle(item.id)}
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

export default NewLocations;
