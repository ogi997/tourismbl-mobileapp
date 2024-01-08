import { View, FlatList } from "react-native";
import Item from "../Item/Item";
import { useSelector } from "react-redux";
import NoData from "../NoData/NoData";

const ItemList = () => {
  const { locations } = useSelector((state) => state.locations);
  if (locations.length === 0) return <NoData />;
  return (
    <View style={{ borderRadius: 35 }}>
      <FlatList
        data={locations}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <Item item={item} id={item.id} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ItemList;
