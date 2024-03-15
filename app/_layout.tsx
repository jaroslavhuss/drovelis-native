import { Slot } from "expo-router";

import { StyleSheet, View, Dimensions, StatusBar } from "react-native";
import React, { useEffect, useState} from "react";
import { GlobalProvider } from "../context/GlobalContext";
import Menu from "../components/Menu";
import { useFonts } from "expo-font";
const _layout = () => {
  const { width, height }: { width: number; height: number } =
    Dimensions.get("screen");
  const [w, setW] = useState<number>(width);
  const [h, setH] = useState<number>(height);

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
