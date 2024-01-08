import { View } from "react-native";
import Map from "../../components/Map/Map";
import MapMenu from "../../components/MapMenu/MapMenu";
import { useCallback, useRef, useState } from "react";
import LocationModal from "../../components/LocationModal/LocationModal";
import CategoryList from "../../components/Category/CategoryList";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getAllLocations } from "../../../redux-store/locationsSlice";

const MapScreen = () => {
  const [editMode, setEditMode] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const handleEditLocation = () => {
    setEditMode((prev) => !prev);
  };
  const mapRef = useRef();

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        await dispatch(getAllLocations({ category: "ALL" }));
      };

      fetchData();
    }, [])
  );
  return (
    <View>
      <Map
        mapRef={mapRef}
        editMode={editMode}
        setModalVisible={setModalVisible}
        setId={setId}
      />

      <View
        style={{
          position: "absolute",
          top: "5%",
          display: showCategory ? "flex" : "none",
        }}
      >
        <CategoryList />
      </View>

      <MapMenu
        mapRef={mapRef}
        handleEditLocation={handleEditLocation}
        editMode={editMode}
        setModalVisible={setModalVisible}
        showCategory={showCategory}
        setShowCategory={setShowCategory}
      />

      {modalVisible && (
        <LocationModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          editMode={editMode}
          id={id}
        />
      )}
    </View>
  );
};

export default MapScreen;
