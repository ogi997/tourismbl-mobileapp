import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomBottomNavigation from "./src/components/CustomBottomNavigation/CustomBottomNavigation";
import FavouriteScreen from "./src/screens/FavouriteScreen/FavouriteScreen";
import OneItemScreen from "./src/screens/OneItemScreen/OneItemScreen";
import { store } from "./redux-store/store";
import { Provider } from "react-redux";
import OneUser from "./src/components/Users/OneUser/OneUser";
import OneLocation from "./src/components/NewLocations/OneLocation/OneLocation";
import OneUpdateLocation from "./src/components/UpdateLocations/OneUpdateLocation/OneUpdateLocation";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={CustomBottomNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: false, animation: "slide_from_right" }}
            name="item"
            component={OneItemScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, animation: "slide_from_left" }}
            name="favourite"
            component={FavouriteScreen}
          />

          <Stack.Screen
            options={{ headerShown: false, animation: "slide_from_bottom" }}
            name="OneUser"
            component={OneUser}
          />

          <Stack.Screen
            options={{ headerShown: false, animation: "slide_from_bottom" }}
            name="OneLocation"
            component={OneLocation}
          />

          <Stack.Screen
            options={{ headerShown: false, animation: "slide_from_bottom" }}
            name="UpdateLocation"
            component={OneUpdateLocation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
