import { View, Image, StyleSheet } from "react-native";
const ShowAvatar = ({ image, width, height, radius }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.imageContainer(width, height, radius)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: (w, h, r) => {
    return {
      width: w,
      height: h,
      borderRadius: r,
    };
  },
});

export default ShowAvatar;
