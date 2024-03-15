import React, { useRef} from 'react'
import {  Animated,  Dimensions,  StyleSheet, SafeAreaView, ScrollView, Text, Image, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import Heading from '../../components/Heading'
import Layout from '../../components/Layout'

const DROV = () => {
    const { width, height } = Dimensions.get("screen");
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const theGirl = useRef(new Animated.Value(0)).current;
    const window1 = useRef(new Animated.Value(0)).current;
    const window2 = useRef(new Animated.Value(0)).current;
    const window3 = useRef(new Animated.Value(0)).current;
    const window4 = useRef(new Animated.Value(0)).current;
    const window5 = useRef(new Animated.Value(0)).current;
    const window6 = useRef(new Animated.Value(0)).current;

    useFocusEffect(
        React.useCallback(() => {
            runAni();
            return () => {
                fadeAnim.setValue(0);
                opacityAnim.setValue(0);
                opacityAnim.setValue(0);
                window1.setValue(0);
                window2.setValue(0);
                window3.setValue(0);
                window4.setValue(0);
                window5.setValue(0);
                window6.setValue(0);
                theGirl.setValue(0);
            };
        }, [])
    );

    const runAni = () => {
        Animated.sequence([
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();
        Animated.timing(fadeAnim, {
            toValue: 1300,
            duration: 3000,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(theGirl, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }).start();
        });

        //Window1
        Animated.sequence([
            Animated.timing(window1, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(window1, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start();


        //Window2
        Animated.sequence([
            Animated.timing(window2, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(window2, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            })
        ]).start();
        //Window3
        Animated.sequence([
            Animated.timing(window3, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(window3, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            })
        ]).start(() => {
        });
        //Window4
        Animated.sequence([
            Animated.timing(window4, {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.timing(window4, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            })
        ]).start(() => {
        });
        //Window5
        Animated.sequence([
            Animated.timing(window5, {
                toValue: 0,
                duration: 900,
                useNativeDriver: true,
            }),
            Animated.timing(window5, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ]).start(() => {
        });
        //Window6
        Animated.sequence([
            Animated.timing(window6, {
                toValue: 0,
                duration: 1100,
                useNativeDriver: true,
            }),
            Animated.timing(window6, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            })
        ]).start(() => {
        });

    }

    return (
        <Layout>
            <Heading heading="Data" />
   
          <View style={{
                    width: width,
                    height: height,
                    borderWidth:2,
                }}>
                <SafeAreaView
                >
                    <ScrollView style={{
                        marginTop: 100,
                  marginLeft:70,
                        
                height: height,
                   
                    }}>
                    <Text style={{
                        fontSize:30,
                        color:"darkblue",
                        fontWeight:"bold"
                    }}>Drovelis x Zlynda, cycles</Text>
                    <Image source={require("../../assets/new_table_2.png")} resizeMode="cover" style={{ width: 960, height:390 }} />
                   
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

export default DROV

const styles = StyleSheet.create({
    textWindow: {
        position: "absolute",
        fontFamily: "Museo",
        color: "#d9326f",
        fontSize: 15,
        textAlign: "center"

    }
});