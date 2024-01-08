import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ChangePasswordModal from "../../ChangePasswordModal/ChangePasswordModal";
import { useDispatch, useSelector } from "react-redux";
import { status, updateProfile } from "../../../../redux-store/userSlice";
// import ChangePasswordModal from "../../../screens/ProfileScreen/ChangePasswordModal/ChangePasswordModal";
const ProfileForm = ({ user }) => {
  const { control, errors, formState, handleSubmit } = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.users);

  // console.log(user);

  const [modalVisible, setModalVisible] = useState(false);

  const handleChangePassword = () => {
    setModalVisible(true);
  };

  const updateProfilehandle = async (data) => {
    // const { username } = data;
    delete data.username;

    await dispatch(updateProfile({ value: data }));
    dispatch(status());
    // console.log(data);
  };
  return (
    <View style={styles.formContainer}>
      <Controller
        control={control}
        defaultValue={user.first_name}
        name="first_name"
        render={({ field }) => (
          <TextInput
            activeUnderlineColor={Colors.SECONDARY_COLOR}
            label={"First name"}
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={(value) => field.onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        defaultValue={user.last_name}
        name="last_name"
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
        defaultValue={user.username}
        name="username"
        render={({ field }) => (
          <TextInput
            activeUnderlineColor={Colors.SECONDARY_COLOR}
            label={"Username"}
            disabled={true}
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={(value) => field.onChange(value)}
          />
        )}
      />

      <Controller
        control={control}
        defaultValue={user.email}
        name="email"
        render={({ field }) => (
          <TextInput
            activeUnderlineColor={Colors.SECONDARY_COLOR}
            label={"Email"}
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={(value) => field.onChange(value)}
          />
        )}
      />

      <View>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleSubmit(updateProfilehandle)}
        >
          Update profile
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleChangePassword}
        >
          Change password
        </Button>
      </View>

      <ChangePasswordModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },

  button: {
    backgroundColor: Colors.HIGHLIGHT_COLOR,
    margin: 5,
  },
});

export default ProfileForm;
