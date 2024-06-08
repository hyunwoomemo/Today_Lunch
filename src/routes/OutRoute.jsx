import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import Login from "../screens/OutRoute/Login";
import Join from "../screens/OutRoute/Join";

const Stack = createNativeStackNavigator();

const OutRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Join" component={Join} />
    </Stack.Navigator>
  );
};

export default OutRoute;
