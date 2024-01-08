import { View, Text, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PIN } from "../../../utils/Images/Images";

const MapContainer = ({ item }) => {
  return (
    <View style={styles.mapContainer}>
      <Text style={styles.infoTitle}>Location</Text>

      <MapView
        mapType="terrain"
        style={styles.map}
        scrollEnabled={false}
        zoomControlEnabled={false}
        zoomEnabled={false}
        initialRegion={{
          latitude: item?.geometry.coordinates[0],
          longitude: item?.geometry.coordinates[1],
          latitudeDelta: 0.03,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: item?.geometry.coordinates[0],
            longitude: item?.geometry.coordinates[1],
            latitudeDelta: 0.03,
            longitudeDelta: 0.0421,
          }}
        >
          <Image source={PIN} style={styles.imageSize} resizeMode="contain" />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    marginHorizontal: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.TEXT_COLOR,
  },
  map: {
    width: "100%",
    height: 270,
    marginVertical: 10,
    marginHorizontal: 7,
  },
  imageSize: {
    width: 35,
    height: 35,
  },
});

export default MapContainer;
