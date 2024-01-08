import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import Colors from "../../utils/Colors/Colors";
import CustomTopNavigation from "../../components/CustomTopNavigation/CustomTopNavigation";

const AdminPanel = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
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
          <Text style={styles.titleHeader}>Admin panel</Text>
        </View>
      </View>

      <CustomTopNavigation />
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
});

export default AdminPanel;
