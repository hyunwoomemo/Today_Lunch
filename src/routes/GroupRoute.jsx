import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Group from "../screens/InRoute/group/Group";

const Stack = createNativeStackNavigator();

const GroupRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }}>
      <Stack.Screen name="Group" component={Group} />
    </Stack.Navigator>
  );
};

export default GroupRoute;
