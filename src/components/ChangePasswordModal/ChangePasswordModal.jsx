import { Modal, StyleSheet, View } from "react-native";
import { IconButton, Button, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import Colors from "../../utils/Colors/Colors";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../../redux-store/userSlice";
import { showToast } from "../../utils/methods/utils";

const ChangePasswordModal = ({ modalVisible, setModalVisible }) => {
  const { control, errors, formState, handleSubmit } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const handleButtonChangePassword = (data) => {
    dispatch(updatePassword({ value: data }));
    showToast("Successfully changed password.");
    setModalVisible(false);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <IconButton
            icon={"close"}
            style={{ position: "absolute", right: 0 }}
            onPress={() => setModalVisible(false)}
          />
          <View style={{ marginTop: 25, width: "100%" }}>
            <Controller
              control={control}
              defaultValue={""}
              name={"password_old"}
              render={({ field }) => (
                <TextInput
                  activeUnderlineColor={Colors.SECONDARY_COLOR}
                  secureTextEntry
                  textContentType="password"
                  label={"Old password"}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={(value) => field.onChange(value)}
                />
              )}
            />

            <Controller
              control={control}
              defaultValue={""}
              name={"password"}
              render={({ field }) => (
                <TextInput
                  activeUnderlineColor={Colors.SECONDARY_COLOR}
                  label={"New password"}
                  secureTextEntry
                  textContentType="password"
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={(value) => field.onChange(value)}
                />
              )}
            />

            <Controller
              control={control}
              defaultValue={""}
              name={"password_repeat"}
              render={({ field }) => (
                <TextInput
                  activeUnderlineColor={Colors.SECONDARY_COLOR}
                  label={"Repeat new password"}
                  value={field.value}
                  secureTextEntry
                  textContentType="password"
                  onBlur={field.onBlur}
                  onChangeText={(value) => field.onChange(value)}
                />
              )}
            />

            <Button
              mode="contained"
              style={styles.button}
              onPress={handleSubmit(handleButtonChangePassword)}
            >
              Change password
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: Colors.HIGHLIGHT_COLOR,
    margin: 5,
  },
});

export default ChangePasswordModal;
