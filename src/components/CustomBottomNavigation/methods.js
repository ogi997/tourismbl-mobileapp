export const getIconName = (iconName, focused) => {
  if (iconName === "Login") return focused ? "log-in" : "log-in-outline";
  else if (iconName === "Registration")
    return focused ? "person-add" : "person-add-outline";
  else if (iconName === "Home2") return focused ? "home" : "home-outline";
  else if (iconName === "Map") return focused ? "map" : "map-outline";
  else if (iconName === "AdminPanel")
    return focused ? "shield" : "shield-outline";
};
