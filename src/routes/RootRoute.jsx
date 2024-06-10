import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import OutRoute from "./OutRoute";
import InRoute from "./InRoute";
import { useAtom } from "jotai";
import { authAtom } from "../store/auth";
import { authApi } from "../api";
import { getStorage, removeStorage, setStorage } from "../../utils/asyncStorage";

const Stack = createNativeStackNavigator();

const RootRoute = () => {
  const [auth, setAuth] = useAtom(authAtom);


  useEffect(() => {
    // getStorage("token").then((res) => {
    //   if (res) {

    //     // setAuth({ ...auth, isLoggedIn: true });
    //   } else {
    //     setAuth({ ...auth, isLoggedIn: false });
    //   }
    // });

    authApi.check().then((res) => {
      console.log("res", res);

      if (res.CODE === "AC000") {
        if (res.DATA.accessToken) {
          setStorage("token", res.DATA.accessToken);
        }
        console.log("smdkfmsdkf");
        authApi.info().then((res1) => {
          console.log("res1", res1);
          setAuth({ ...auth, info: res1.DATA, isLoggedIn: true });
        });
      } else {
        return setAuth({ ...auth, isLoggedIn: false });
      }
    });
  }, []);

  console.log("auth2", auth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }}>
      {auth?.isLoggedIn ? <Stack.Screen name="InRoute" component={InRoute} /> : <Stack.Screen name="OutRoute" component={OutRoute} />}
    </Stack.Navigator>
  );
};

export default RootRoute;
