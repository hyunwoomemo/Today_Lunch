import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GroupRoute from "./GroupRoute";
import More from "../screens/InRoute/More";

const Stack = createNativeStackNavigator();

const MoreRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }}>
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="GroupRoute" component={GroupRoute} />
    </Stack.Navigator>
  );
};

export default MoreRoute;
