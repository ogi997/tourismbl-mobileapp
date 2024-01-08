import { useEffect, useState } from "react";
import { Modal, ScrollView, StyleSheet, View, Text } from "react-native";
import { IconButton, Button, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import Colors from "../../utils/Colors/Colors";
import * as DocumentPicker from "expo-document-picker";
import { Picker } from "@react-native-picker/picker";
import ShowAvatar from "../ShowAvatar/ShowAvatar";
import { useDispatch, useSelector } from "react-redux";
import { getVisibilities } from "../../../redux-store/choiceSlice";
import {
  clearLocationById,
  createLocation,
  deleteLocationById,
  getLocationById,
  clearLocation,
} from "../../../redux-store/locationsSlice";
import uuid from "uuid-random";
import Loading from "../Loading/Loading";
import {
  checkIfRequestExist,
  createUpdateRequest,
} from "../../../redux-store/locationUpdateRequestSlice";

// TODO
// kod brisanja na mapi potrebno izvrsiti mutaciju state-a locations
// potrebni srediti LocationModal componentu tako su neka polja zakljucana a neka ne

const LocationModal = ({ modalVisible, setModalVisible, editMode, id }) => {
  const { location, loading } = useSelector((state) => state.locations);
  const { categories, visibilities } = useSelector((state) => state.choices);
  const { user } = useSelector((state) => state.users);
  const { existRequest } = useSelector((state) => state.locationUpdateRequest);
  const { deleteLoading } = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);
  const { control, errors, formState, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const getData = async () => {
      await dispatch(getVisibilities());
    };
    getData();
  }, []);

  const isCurrentUserLastUser = user?.id === location?.last_user;

  console.log(isCurrentUserLastUser);

  useEffect(() => {
    const getData = async () => {
      if (editMode) {
        const result = await dispatch(getLocationById({ id: id }));
        if (result) {
          const { title, description, category, visibility, image } =
            result.payload;
          setImage(image);
          setValue("title", title);
          setValue("description", description);
          setValue("category", category);
          setValue("visibility", visibility);
        }
        await dispatch(checkIfRequestExist({ id: id }));
      }
    };

    getData();

    return () => {
      dispatch(clearLocation());
      // setData(null);
    };
  }, []);

  const pickImage = async () => {
    const result = await DocumentPicker.getDocumentAsync();

    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const handleAddNewLocation = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    formData.append("image", {
      uri: image,
      type: "image/jpg",
      name: uuid() + ".jpg",
    });

    const result = await dispatch(createLocation({ value: formData }));
    setModalVisible(false);
  };

  const handleLocationUpdateRequest = async (value) => {
    const formData = new FormData();
    Object.keys(value).forEach((key) => {
      formData.append(key, value[key]);
    });
    formData.append("image", {
      uri: image,
      type: "image/jpg",
      name: uuid() + ".jpg",
    });
    formData.append("id_update", id);
    const result = await dispatch(createUpdateRequest({ value: formData }));
    setModalVisible(false);
  };

  const handleLocationDelete = async () => {
    await dispatch(deleteLocationById({ id: id }));
    await dispatch(clearLocationById({ id: id }));

    setModalVisible(false);
  };

  if (loading) return <Loading />;
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <ScrollView style={styles.centeredView}>
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
              name={"title"}
              render={({ field }) => (
                <TextInput
                  // disabled={!(isCurrentUserLastUser || editMode)}
                  activeUnderlineColor={Colors.SECONDARY_COLOR}
                  label={"Title"}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={(value) => field.onChange(value)}
                />
              )}
            />

            <Controller
              control={control}
              defaultValue={""}
              name={"description"}
              render={({ field }) => (
                <TextInput
                  // disabled={!(isCurrentUserLastUser && editMode)}
                  activeUnderlineColor={Colors.SECONDARY_COLOR}
                  label={"Description"}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={(value) => field.onChange(value)}
                />
              )}
            />

            <Text>Category</Text>
            <Controller
              control={control}
              name="category"
              render={({ field }) => {
                return (
                  <Picker
                    // enabled={isCurrentUserLastUser && editMode}
                    selectedValue={field.value}
                    onBlur={field.onBlur}
                    onValueChange={(itemValue, itemIndex) =>
                      field.onChange(itemValue)
                    }
                  >
                    {categories.map((item, index) => {
                      return (
                        <Picker.Item
                          key={`category-${index}`}
                          label={item.name}
                          value={item.code}
                        />
                      );
                    })}
                  </Picker>
                );
              }}
            />

            <Text>Visibility</Text>
            <Controller
              control={control}
              name="visibility"
              render={({ field }) => (
                <Picker
                  // enabled={isCurrentUserLastUser && editMode}
                  selectedValue={field.value}
                  onBlur={field.onBlur}
                  onValueChange={(itemValue, itemIndex) =>
                    field.onChange(itemValue)
                  }
                >
                  {visibilities.map((item, index) => (
                    <Picker.Item
                      key={`visibility-${index}`}
                      label={item.name}
                      value={item.code}
                    />
                  ))}
                </Picker>
              )}
            />

            {isCurrentUserLastUser && (
              <Button
                mode="contained"
                style={styles.button}
                disabled={!(isCurrentUserLastUser && editMode)}
                onPress={pickImage}
              >
                Add image
              </Button>
            )}

            {image && (
              <View style={{ padding: 20 }}>
                {isCurrentUserLastUser && (
                  <IconButton
                    style={{
                      position: "absolute",
                    }}
                    size={35}
                    iconColor="black"
                    icon={"close"}
                    onPress={() => setImage(null)}
                  />
                )}
                <ShowAvatar
                  image={image}
                  width={200}
                  height={200}
                  radius={55}
                />
              </View>
            )}
            {!editMode && (
              <Button
                mode="container"
                style={styles.button}
                onPress={handleSubmit(handleAddNewLocation)}
                disabled={formState.isValid && image === null}
              >
                Add new location
              </Button>
            )}
            {isCurrentUserLastUser && (
              <View>
                <Button
                  mode="contained"
                  style={styles.button}
                  onPress={handleSubmit(handleLocationUpdateRequest)}
                  disabled={
                    (formState.isValid && image === null) || existRequest
                  }
                >
                  {existRequest ? "Already requested" : "Update"}
                </Button>
                <Button
                  mode="contained"
                  buttonColor={Colors.SECONDARY_COLOR}
                  onPress={handleLocationDelete}
                  loading={deleteLoading}
                >
                  Delete
                </Button>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
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

export default LocationModal;
