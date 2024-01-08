import React, { useEffect, useCallback } from "react";
import { ScrollView, StyleSheet, RefreshControl } from "react-native";
import { DataTable, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux-store/adminUserSlice";

const Users = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.adminUser);
  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllUsers());
    };
    getData();
  }, []);

  const onRefresh = useCallback(async () => {
    await dispatch(getAllUsers());
  }, []);

  const openUserHandle = (id) => {
    navigation.navigate("OneUser", { state: { user_id: id } });
  };

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
          <DataTable.Title>Full name</DataTable.Title>
          <DataTable.Title>Last name</DataTable.Title>
          <DataTable.Title>Username</DataTable.Title>
          <DataTable.Title>Action</DataTable.Title>
        </DataTable.Header>

        {users.map((user) => (
          <DataTable.Row
            key={user.id}
            style={{ borderColor: Colors.TEXT_COLOR }}
          >
            <DataTable.Cell>{user.first_name}</DataTable.Cell>
            <DataTable.Cell>{user.last_name}</DataTable.Cell>
            <DataTable.Cell>{user.username}</DataTable.Cell>
            <DataTable.Cell>
              <Button
                style={styles.button}
                mode={"contained"}
                onPress={() => openUserHandle(user.id)}
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

export default Users;
