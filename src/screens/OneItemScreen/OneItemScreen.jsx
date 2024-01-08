import { useEffect } from "react";
import { StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Divider } from "react-native-paper";
import AppBar from "../../components/OneItem/AppBar/AppBar";
import InfoContainer from "../../components/OneItem/InfoContainer/InfoContainer";
import DescriptionContainer from "../../components/OneItem/DescriptionContainer/DescriptionContainer";
import MapContainer from "../../components/OneItem/MapContainer/MapContainer";
import { useDispatch, useSelector } from "react-redux";
import { getLocationById } from "../../../redux-store/locationsSlice";
import Loading from "../../components/Loading/Loading";

const OneItemScreen = ({ route, navigation }) => {
  const { location, loading } = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const { itemId } = route.params;
      await dispatch(getLocationById({ id: itemId }));
    };

    getData();
  }, []);

  if (loading) return <Loading />;

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: location?.image }}
        resizeMode="cover"
        style={styles.headerWrapper}
        imageStyle={styles.backgroundImageStyle}
      >
        {location && <AppBar item={location} />}
      </ImageBackground>
      {location && <InfoContainer item={location} />}
      {location && <DescriptionContainer item={location} />}

      <Divider style={styles.dividerStyle} />

      {location && <MapContainer item={location} />}

      <Divider style={styles.dividerStyle} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: 350,
    position: "relative",
  },
  backgroundImageStyle: {
    borderRadius: 35,
  },
  dividerStyle: {
    marginHorizontal: 20,
    margin: 5,
  },
});

export default OneItemScreen;
