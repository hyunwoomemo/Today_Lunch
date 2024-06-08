import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/InRoute/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Record from "../screens/InRoute/Record";
import Shop from "../screens/InRoute/Shop";
import More from "../screens/InRoute/More";

const Tab = createBottomTabNavigator();

const InRoute = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} sceneContainerStyle={{ backgroundColor: "#fff" }} initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Record" component={Record} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default InRoute;
