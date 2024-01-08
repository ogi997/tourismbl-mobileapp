import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { coordinates } from "../../utils/DUMMY_API/DUMMY_API";

const useLocationForegroundPermission = () => {
  const [location, setLocation] = useState(coordinates);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied.");
        return;
      }

      const result = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return [location, errorMsg];
};

export default useLocationForegroundPermission;
