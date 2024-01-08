import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import { Button, IconButton, TextInput } from "react-native-paper";
import Colors from "../../utils/Colors/Colors";
import * as ImagePicker from "expo-image-picker";
import ShowAvatar from "../../components/ShowAvatar/ShowAvatar";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { register } from "../../../redux-store/userSlice";
import uuid from "uuid-random";
import { showToast } from "../../utils/methods/utils";
const RegistrationScreen = ({ navigation }) => {
  const { control, errors, formState, handleSubmit } = useForm({
    mode: "onChange",
  });
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const submit = async (data) => {
    data = { ...data, avatar: image };
    let formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", {
      uri: image,
      name: uuid() + ".jpg",
      type: "image/jpg",
    });

    const response = await dispatch(
      register({ value: formData, type: "TYPE" })
    );

    if (response?.error?.message === "400") {
      showToast("Username/email must be unique.");
      return;
    }

    showToast("You have successfully register to our system.");
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePress = () => {
    navigation.navigate("Login");
  };
  return (
    <ScrollView behavior="padding" style={styles.container}>
      <View style={styles.form}>
        <View style={styles.formHeader}>
          <Text style={styles.text}>Register to </Text>
          <Text style={styles.textPrimary}>Tourism Banja Luka</Text>
        </View>

        <Controller
          control={control}
          defaultValue={""}
          name="first_name"
          rules={{ required: { value: true, message: "Required." } }}
          render={({ field }) => (
            <TextInput
              activeUnderlineColor={Colors.SECONDARY_COLOR}
              label={"Fist name"}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={(value) => field.onChange(value)}
            />
          )}
        />

        <Controller
          control={control}
          defaultValue={""}
          name="last_name"
          rules={{ required: { value: true, message: "Required." } }}
          render={({ field }) => (
            <TextInput
              activeUnderlineColor={Colors.SECONDARY_COLOR}
              label={"Last name"}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={(value) => field.onChange(value)}
            />
          )}
        />

        <Controller
          control={control}
          defaultValue={""}
          name="username"
          rules={{ required: { value: true, message: "Required." } }}
          render={({ field }) => (
            <TextInput
              activeUnderlineColor={Colors.SECONDARY_COLOR}
              label={"Username"}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={(value) => field.onChange(value)}
            />
          )}
        />

        <Button mode="contained" style={styles.button} onPress={pickImage}>
          Avatar
        </Button>
        {image && (
          <View style={{ padding: 20 }}>
            <IconButton
              style={{
                position: "absolute",
              }}
              size={35}
              iconColor="black"
              icon={"close"}
              onPress={() => setImage(null)}
            />
            <ShowAvatar image={image} width={200} height={200} radius={55} />
          </View>
        )}

        <Controller
          control={control}
          defaultValue={""}
          name="email"
          rules={{ required: { value: true, message: "Required." } }}
          render={({ field }) => (
            <TextInput
              activeUnderlineColor={Colors.SECONDARY_COLOR}
              label={"Email"}
              value={field.value}
              onBlur={field.onBlur}
              textContentType="emailAddress"
              onChangeText={(value) => field.onChange(value)}
            />
          )}
        />

        <Controller
          control={control}
          defaultValue={""}
          name="password"
          rules={{ required: { value: true, message: "Required." } }}
          render={({ field }) => (
            <TextInput
              activeUnderlineColor={Colors.SECONDARY_COLOR}
              label={"Password"}
              value={field.value}
              onBlur={field.onBlur}
              textContentType="password"
              onChangeText={(value) => field.onChange(value)}
              secureTextEntry
            />
          )}
        />

        <Pressable style={styles.infoContainer} onPress={handlePress}>
          <Text style={styles.textInfo}>Already have account? Login</Text>
        </Pressable>

        <Button
          style={styles.button}
          mode={"contained"}
          disabled={!formState.isValid}
          onPress={handleSubmit(submit)}
        >
          Register
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  form: {
    marginVertical: 100,
    backgroundColor: Colors.PRIMARY_COLOR,
    gap: 10,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 55,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 30 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
  },
  text: {
    color: Colors.TEXT_COLOR,
    fontSize: 18,
    padding: 5,
  },
  textPrimary: {
    color: Colors.TEXT_COLOR,
    fontSize: 23,
    fontWeight: "bold",
  },
  formHeader: {
    alignItems: "center",
    padding: 5,
  },
  button: {
    backgroundColor: Colors.HIGHLIGHT_COLOR,
  },
  infoContainer: {
    alignItems: "flex-end",
  },
  textInfo: {
    fontWeight: "bold",
    fontSize: 15,
    color: Colors.TEXT_COLOR,
    padding: 5,
  },
});

export default RegistrationScreen;
