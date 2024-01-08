import { View, StyleSheet, Alert, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useLocationForegroundPermission from "../../hooks/useLocationForegroundPermission/useLocationForegroundPermission";
import { PIN } from "../../utils/Images/Images";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

const Map = ({ mapRef, editMode, setModalVisible, setId }) => {
  const { locations } = useSelector((state) => state.locations);
  const [location, errorMsg] = useLocationForegroundPermission();

  const markerPressHandle = (e) => {
    if (!editMode) return;

    setId(e.nativeEvent.id);
    setModalVisible(true);
  };

  const showMarkers = () => {
    return locations.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={{
            latitude: item.geometry.coordinates[0],
            longitude: item.geometry.coordinates[1],
            latitudeDelta: 0.03,
            longitudeDelta: 0.0421,
          }}
          title={item.title}
          description={item.description}
          identifier={item.id.toString()}
          onPress={markerPressHandle}
        >
          <Image source={PIN} style={styles.imageSize} resizeMode="contain" />
        </Marker>
      );
    });
  };

  return (
    <View>
      {errorMsg && Alert.alert(errorMsg)}
      <MapView
        ref={mapRef}
        mapType="terrain"
        style={styles.map}
        initialRegion={location}
        loadingEnabled={true}
        showsUserLocation={true}
        showsMyLocationButton={false}
      >
        {showMarkers()}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  imageSize: {
    width: 30,
    height: 30,
  },
});

export default Map;
