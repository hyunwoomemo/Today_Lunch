import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Home from "../screens/InRoute/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Record from "../screens/InRoute/Record";
import Shop from "../screens/InRoute/Shop";
import More from "../screens/InRoute/More";
import CustomTab from "../components/common/CustomTab";
import Dummy from "../screens/InRoute/Dummy";
import AddRecord from "../screens/InRoute/AddRecord";
import { Modal, SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator();

const InRoute = () => {
  const [isAddRecord, setIsAddRecord] = useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        sceneContainerStyle={{ backgroundColor: "#fff" }}
        initialRouteName="Home"
        tabBar={(props) => <CustomTab {...props} setIsAddRecord={setIsAddRecord} />}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: "홈" }} />
        <Tab.Screen name="Record" component={Record} options={{ tabBarLabel: "기록" }} />
        <Tab.Screen name="Dummy" component={Dummy} options={{ tabBarLabel: "추가" }} />
        <Tab.Screen name="Shop" component={Shop} options={{ tabBarLabel: "매장" }} />
        <Tab.Screen name="More" component={More} options={{ tabBarLabel: "더보기" }} />
      </Tab.Navigator>
      <Modal animationType="slide" visible={isAddRecord} onDismiss={() => setIsAddRecord(false)}>
        <SafeAreaView style={{ flex: 1 }}>
          <AddRecord setIsAddRecord={setIsAddRecord} />
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default InRoute;
