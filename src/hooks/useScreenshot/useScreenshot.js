import { Alert, Dimensions } from "react-native";
import { useState } from "react";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { showToast } from "../../utils/methods/utils";

const useScreenshot = () => {
  const [loading, setLoading] = useState(false);

  const handleScreenshot = async (mapRef) => {
    if (!mapRef.current) {
      Alert.alert("Problem with map reference.");
      return;
    }

    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("You must have permission for saving photo.");
      return;
    }
    setLoading(true);
    const snapshot = await mapRef.current.takeSnapshot({
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height,
      result: "base64",
    });

    const uri = FileSystem.documentDirectory + "snapshot.png";
    await FileSystem.writeAsStringAsync(uri, snapshot, {
      encoding: FileSystem.EncodingType.Base64,
    });

    await MediaLibrary.saveToLibraryAsync(uri);

    setLoading(false);
    showToast("You have successfully screenshot map.");
  };

  return [loading, handleScreenshot];
};

export default useScreenshot;
