import React from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import Text from "./Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomTab = ({ state, descriptors, navigation, setIsAddRecord }) => {
  return (
    <View style={{ flexDirection: "row", paddingVertical: 15 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
        const Icon = options.tabBarIcon;
        const getIsFocused = () => {
          return state.index === index;
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!getIsFocused() && !event.defaultPrevented) {
            if (route.name === "Dummy") {
              console.log("Dummy");
              setIsAddRecord(true);
            } else {
              navigation.navigate(route.name);
            }
          }
        };

        return (
          <TouchableOpacity key={index} style={{ flex: 1, alignItems: "center" }} onPress={onPress}>
            <Text size={16} bold={getIsFocused()}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTab;
