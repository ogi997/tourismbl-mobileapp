import { View, StyleSheet, FlatList } from "react-native";
import Item from "../../components/Item/Item";
import { useEffect, useState } from "react";
import FavouriteHeader from "../../components/FavouriteHeader/FavouriteHeader";
import useAsyncStorage from "../../hooks/useAsyncStorage/useAsyncStorage";
import NoData from "../../components/NoData/NoData";

const Favourite = () => {
  const [DATA_HOTELS, setDataHotels] = useState(null);
  const { getDataByKey } = useAsyncStorage();
  useEffect(() => {
    const getData = async () => {
      const data = await getDataByKey("local");
      setDataHotels(data);
    };

    getData();
  }, []);
  if (!DATA_HOTELS)
    return (
      <View>
        <FavouriteHeader />
        <NoData />
      </View>
    );
  return (
    <View>
      <FavouriteHeader setDataHotels={setDataHotels} />

      <View style={styles.mainContent}>
        <FlatList
          data={DATA_HOTELS}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Item item={item} id={item.id} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    marginVertical: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 10,
    height: "70%",
  },
});

export default Favourite;
