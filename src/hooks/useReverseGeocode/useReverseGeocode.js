import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useReverseGeocode = (coords) => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const reverse = await Location.reverseGeocodeAsync({
        latitude: coords[0],
        longitude: coords[1],
      });
      setAddress(createAddress(reverse));
    };
    getData();
  }, []);

  return { address };
};

const createAddress = (reverse) => {
  let dataToReturn;

  const district =
    reverse[0]?.district !== null ? reverse[0]?.district + ", " : "";
  const street = reverse[0]?.street !== null ? reverse[0]?.street + " " : "";
  const streetNumber =
    reverse[0]?.streetNumber !== null ? reverse[0]?.streetNumber : "";

  dataToReturn = district + street + streetNumber;

  return dataToReturn;
};

export default useReverseGeocode;
