import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../../utils/Colors/Colors";
import { getIconName } from "../../screens/AdminPanel/methods";
import Users from "../Users/Users";
import NewLocations from "../NewLocations/NewLocations";
import UpdateLocations from "../UpdateLocations/UpdateLocations";

const Tab = createMaterialTopTabNavigator();
const CustomTopNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Icon
              color={focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR}
              name={getIconName(route.name, focused)}
              size={25}
            />
          );
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },

        tabBarActiveTintColor: Colors.PRIMARY_COLOR,
        tabBarInactiveTintColor: Colors.SECONDARY_COLOR,
      })}
    >
      <Tab.Screen name="Users" component={Users} />
      <Tab.Screen
        name="NewLocations"
        options={{ title: "New locations" }}
        component={NewLocations}
      />

      <Tab.Screen
        name="UpdateLocations"
        options={{ title: "Update locations" }}
        component={UpdateLocations}
      />
    </Tab.Navigator>
  );
};

export default CustomTopNavigation;
