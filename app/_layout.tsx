import { Slot } from "expo-router";

import { StyleSheet, View, Dimensions, StatusBar } from "react-native";
import React, { useEffect, useState} from "react";
import { GlobalProvider } from "../context/GlobalContext";
import Menu from "../components/Menu";
import { useFonts } from "expo-font";
import { usePathname } from "expo-router";
const _layout = () => {
  const { width, height }: { width: number; height: number } =
    Dimensions.get("screen");
  const [w, setW] = useState<number>(width);
  const [h, setH] = useState<number>(height);
  const currentPath = usePathname();
  const isAnalyticsAllowed: boolean = true;
    const URL = "https://central.naplast.net";
    useEffect(() => {
    (async () => {
      if (!isAnalyticsAllowed) return;
      try {
   await fetch(`${URL}/centralapp/ipad/analytics/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            application_name: "drovelis-native",
            screen: currentPath,
            event: "view",
            content: "screen",
            person_identifier: "unknown",
          }),
        });
      } catch (error) {}
    })();
  }, [currentPath]);
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setH(screen.height);
        setW(screen.width);
      }
    );
    return () => subscription?.remove();
  }, []);

  const [loaded] = useFonts({
    Museo: require("../assets/fonts/museo.otf"),
    MuseoBold: require("../assets/fonts/museo900.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <GlobalProvider>
      <View
        style={{
          width: w,
          height: h,
        }}
      >
        <Slot />
        <Menu />
        <StatusBar hidden={true} />
      </View>
    </GlobalProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
