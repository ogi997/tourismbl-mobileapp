import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { ActivityIndicator, IconButton } from "react-native-paper";
import Colors from "../../utils/Colors/Colors";
import useScreenshot from "../../hooks/useScreenshot/useScreenshot";

const MapMenu = ({
  mapRef,
  handleEditLocation,
  editMode,
  setModalVisible,
  showCategory,
  setShowCategory,
}) => {
  const [collapse, setCollapse] = useState(false);
  const [loading, handleScreenshot] = useScreenshot();

  const handleAddNewLocation = () => {
    setModalVisible(true);
  };

  return (
    <View
      style={[styles.menuContainer, collapse && styles.menuContainerCollapse]}
    >
      <TouchableOpacity
        disabled={editMode}
        style={styles.menuItem}
        onPress={handleAddNewLocation}
      >
        <View style={styles.row}>
          <IconButton disabled={editMode} icon={"plus"} />
          <Text>Add location</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuItem, editMode && styles.active]}
        onPress={handleEditLocation}
      >
        <View style={styles.row}>
          <IconButton icon={"book-edit"} />
          <Text>Edit location</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={editMode}
        style={styles.menuItem}
        onPress={() => handleScreenshot(mapRef)}
      >
        <View style={styles.row}>
          {loading ? (
            <ActivityIndicator
              style={styles.loadingIndicator}
              color={Colors.PRIMARY_COLOR}
            />
          ) : (
            <IconButton disabled={editMode} icon={"cellphone-screenshot"} />
          )}
          <Text>Screenshot</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuItem, showCategory && styles.active]}
        onPress={() => setShowCategory((prev) => !prev)}
      >
        <View style={styles.row}>
          <IconButton icon={"shape"} />
          <Text>Category</Text>
        </View>
      </TouchableOpacity>

      <IconButton
        disabled={editMode}
        icon={"arrow-right"}
        style={styles.collapse}
        onPress={() => setCollapse((prev) => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: "20%",
    left: "3%",
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderRadius: 200,
    width: 50,
    overflow: "hidden",
  },
  menuContainerCollapse: {
    width: 160,
    alignItems: "center",
    borderRadius: 25,
  },
  menuItem: {
    width: "100%",
    color: Colors.TEXT_COLOR,
  },
  collapse: {
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  active: {
    backgroundColor: Colors.SECONDARY_COLOR,
  },
  loadingIndicator: {
    marginLeft: 15,
    marginRight: 15,
  },
});

export default MapMenu;
