import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Colors from "../../utils/Colors/Colors";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login, status } from "../../../redux-store/userSlice";
import { showToast } from "../../utils/methods/utils";
import { getAllLocations } from "../../../redux-store/locationsSlice";

const LoginScreen = ({ navigation }) => {
  const { control, errors, formState, handleSubmit } = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();

  const submit = async (data) => {
    const result = await dispatch(login({ ...data }));
    if (result?.error?.message === "401")
      return showToast("Username/password are incorrect");
    showToast("You have successfully logged");
    const res = dispatch(status());
    await dispatch(getAllLocations({ category: "ALL" }));
  };

  const handlePress = () => {
    navigation.navigate("Registration");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.formHeader}>
          <Text style={styles.text}>Login to </Text>
          <Text style={styles.textPrimary}>Tourism Banja Luka</Text>
        </View>

        <Controller
          control={control}
          defaultValue={""}
          name="username"
          rules={{
            required: { value: true, message: "Required." },
          }}
          render={({ field }) => {
            return (
              <>
                <TextInput
                  activeUnderlineColor={Colors.SECONDARY_COLOR}
                  value={field.value}
                  label="username"
                  onBlur={field.onBlur}
                  onChangeText={(value) => field.onChange(value)}
                />
              </>
            );
          }}
        />

        <Controller
          control={control}
          defaultValue={""}
          name="password"
          rules={{ required: { value: true, message: "Required." } }}
          render={({ field }) => (
            <>
              <TextInput
                activeUnderlineColor={Colors.SECONDARY_COLOR}
                label={"password"}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={(value) => field.onChange(value)}
                secureTextEntry
                textContentType="password"
              />
            </>
          )}
        />

        <Pressable style={styles.infoContainer} onPress={handlePress}>
          <Text style={styles.textInfo}>Don't have account? Register</Text>
        </Pressable>

        <Button
          style={styles.button}
          mode={"contained"}
          disabled={!formState.isValid}
          onPress={handleSubmit(submit)}
        >
          Login
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: Colors.TEXT_COLOR,
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

export default LoginScreen;
