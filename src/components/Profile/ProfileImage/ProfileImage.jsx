import { useState } from "react";
import {
  View,
  Pressable,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { changeAvatar, status } from "../../../../redux-store/userSlice";
import uuid from "uuid-random";

const ProfileImage = ({ user }) => {
  // const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [image, setImage] = useState({
    uri: user?.avatar,
  }); //ovo se mora dinamicki dodavati

  const handleImagePress = async () => {
    // console.log("PRESS");
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri }); //poslati zahtjev za azuriranje profilne slike
      let formData = new FormData();
      formData.append("avatar", {
        uri: result.assets[0].uri,
        name: uuid() + ".jpg",
        type: "image/jpg",
      });
      await dispatch(changeAvatar({ avatar: formData }));
      dispatch(status());
    }
  };

  return (
    <View style={styles.imageContainer}>
      <Pressable onPress={handleImagePress}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Press to change profile picture.</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 275,
    // borderRadius: 35,
  },
  text: {
    position: "absolute",
    bottom: 2,
    left: 0,
    right: 0,
    color: "white",
    fontSize: 20,
    // lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default ProfileImage;
