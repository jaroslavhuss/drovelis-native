import React, { useState, useEffect} from 'react'
import {  Animated,  Dimensions,  StyleSheet, SafeAreaView, ScrollView, Text, Image, View } from 'react-native'

import Heading from '../../components/Heading'
import Layout from '../../components/Layout'

const COC = () => {
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
    return (
        <Layout>
            <Heading heading="Data" />
   
          <View style={{
                    width: w,
                    height: h,
                }}>
                <SafeAreaView
                >
                    <ScrollView style={{
                        marginTop: 100,
                  marginLeft:70,
                        
                height: h,
                   
                    }}>
                    <Text style={{
                        fontSize:30,
                        color:"darkblue",
                        fontWeight:"bold"
                    }}>COC CZ market – trend gestagenů 03/2021-07/2023, cycles</Text>
                    <Image source={require("../../assets/new_table_1.png")} resizeMode="contain" style={{ width: w-100, height:380}} />
                   
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    </ScrollView>
                </SafeAreaView>
                </View>
        </Layout>
    )
}

export default COC

const styles = StyleSheet.create({
    textWindow: {
        position: "absolute",
        fontFamily: "Museo",
        color: "#d9326f",
        fontSize: 15,
        textAlign: "center"

    }
});