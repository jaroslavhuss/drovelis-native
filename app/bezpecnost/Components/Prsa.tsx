import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");
import PrsaStudie from "../../../assets/prsa_tudie.png";
import PrsaStudie2 from "../../../assets/prsa_studie_2.png";
const Prsa = () => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <View
            style={{
                width: width - 200 ,
              backgroundColor: "#d7dadf",
              borderRadius: 10,
              marginTop:20,
              paddingVertical:40,
              paddingHorizontal:50,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={PrsaStudie}
              style={{
                width: width - 200,
                height: 500,
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
                width: width - 200 ,
              backgroundColor: "#d7dadf",
              borderRadius: 10,
              marginTop:20,
              paddingVertical:40,
              paddingHorizontal:50,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={PrsaStudie2}
              style={{
                width: width - 200,
                height: 1200,
                resizeMode: "contain",
              }}
            />
          </View>
        </View>
      </View>
      <Text style={{ marginBottom: 1500 }}></Text>
    </ScrollView>
  );
};

export default Prsa;

const styles = StyleSheet.create({
  fontStyle: {
    color: "#d9326f",
    fontSize: 25,
    padding: 10,
    fontFamily: "Museo",
  },
  content: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    width,
    height: height - 170,
    zIndex: -2,
  },
  wrapper: {
    width: width - 300,
    alignSelf: "center",
  },
});
