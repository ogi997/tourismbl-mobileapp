import { memo } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import RegistrationScreen from "../../screens/Registration/RegistrationScreen";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import Colors from "../../utils/Colors/Colors";
import { getIconName } from "./methods";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import MapScreen from "../../screens/MapScreen/MapScreen";
import AdminPanel from "../../screens/AdminPanel/AdminPanel";

const Tab = createBottomTabNavigator();

const CustomBottomNavigation = memo(() => {
  const { authenticated, admin, user } = useSelector((state) => state.users);

  return (
    <Tab.Navigator
      initialRouteName="Home2"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Profile") {
            return (
              <Image
                source={{ uri: user?.avatar }}
                style={{ width: 25, height: 25, borderRadius: 50 }}
              />
            );
          } else
            return (
              <Icon
                color={focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR}
                name={getIconName(route.name, focused)}
                size={25}
              />
            );
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          padding: 5,
        },
        tabBarStyle: {
          position: "absolute",
          height: 70,
          margin: 15,
          borderRadius: 20,
          backgroundColor: Colors.BACKGROUND_COLOR,
          shadowColor: "#000",
          shadowOffset: { width: 5, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
        },
        tabBarActiveTintColor: Colors.PRIMARY_COLOR,
        tabBarInactiveTintColor: Colors.SECONDARY_COLOR,
      })}
    >
      {!authenticated && (
        <Tab.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      )}

      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />

      {!authenticated && (
        <Tab.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      )}

      {authenticated && admin && (
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="AdminPanel"
          component={AdminPanel}
          onPress={() => console.log("aa")}
        />
      )}

      {authenticated && (
        <Tab.Screen
          options={{ headerShown: false }}
          name="Map"
          component={MapScreen}
        />
      )}
      {authenticated && (
        <Tab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={ProfileScreen}
        />
      )}
    </Tab.Navigator>
    // </View>
  );
});

export default CustomBottomNavigation;
