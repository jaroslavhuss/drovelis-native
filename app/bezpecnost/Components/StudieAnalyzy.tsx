import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const StudieAnalyzy = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={{
                        marginBottom: 20, marginTop: 30, color: "#d9326f",
                        fontSize: 35,
                        padding: 10,
                        fontFamily: "Museo",
                    }}>
                        <Text style={{ fontWeight: "bold" }}>Předregistrační studie Drovelis</Text>
                    </Text>
                    <Image source={require("../../../assets/vte_analyza.png")} style={{
                        resizeMode: "contain",
                        width: 1200,
                        height: 740,
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom: 20
                    }} />
                    <Image source={require("../../../assets/vte_analyza_2.png")} style={{
                        resizeMode: "contain",
                        width: 1200,
                        height: 550,
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom: 20
                    }} />



                    <Text style={{
                        marginBottom: 20, marginTop: 30, color: "#d9326f",
                        fontSize: 35,
                        padding: 10,
                        fontFamily: "Museo",

                    }}>
                        <Text style={{ fontWeight: "bold" }}>Analýza farmakovigilančních dat z databáze EudraVigilance</Text>
                    </Text>

                    <View style={{
                        flexDirection: "row", gap: 10, width: "80%", alignSelf: "center", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start"
                    }}>
                        <View><Image source={require("../../../assets/letadlo_bullet.png")} /></View>
                        <View><Text style={{fontSize:18}}>Zhodnocení rizika žilní tromboembolie (VTE) u kombinované perorální antikoncepce (COC) s přirozenými estrogeny E2 a E4 vůči COC se syntetickým estrogenem (EE) a DRSP only</Text></View>
                    </View>
                    <View style={{
                        flexDirection: "row", gap: 10, justifyContent: "center", width: "80%", alignItems: "center", marginTop: 10
                    }}>
                        <View><Image source={require("../../../assets/letadlo_bullet.png")} /></View>
                        <View><Text style={{fontSize:18}}>Zpracovává všechna data za období leden 2004 - červenec 2024</Text></View>
                    </View>
                    <Image source={require("../../../assets/new_tabulka_antikoncepce.png")} style={{
                        resizeMode: "contain",
                        width: 1200,
                        height: 600,
                        alignSelf: "center",
                        marginTop: 50,
                        marginBottom: 20
                    }} />
                    <View style={{
                        marginBottom: 20, marginTop: 20, borderWidth: 2, padding: 12, borderRadius: 12, borderColor: "#d9326f", shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.39,
                        shadowRadius: 8.30,
                        maxWidth:"100%",
                        elevation: 13,
                    }}>
                          <Text style={{
                        marginBottom: 10, marginTop: 10, color: "#d9326f",
                        fontSize: 25,
                            textAlign: "center",
                        fontFamily: "Museo",
                    }}>
                        <Text style={{ fontWeight: "bold" }}>Závěr</Text>
                    </Text>

                        <View style={{
                            flexDirection: "row", gap: 10, justifyContent: "center", width: "80%", alignItems: "center", marginTop: 10, alignSelf: "center"
                        }}>
                            <View><Image source={require("../../../assets/letadlo_bullet.png")} /></View>
                                      <View><Text style={{fontSize:18}}>COC obsahující přirozené estrogeny vykazují významně nižší proporcionální míru hlášení tromboticých příhod ve srovnání s COC na bázi EE</Text></View>
                        </View>
                        <View style={{
                            flexDirection: "row", gap: 10, justifyContent: "center", width: "80%", alignItems: "center", marginTop: 10, alignSelf: "center"
                        }}>
                            <View><Image source={require("../../../assets/letadlo_bullet.png")} /></View>
                                      <View><Text style={{fontSize:18}}>E4/DRSP vykazoval nejnižší míru hlášení, podobně jako přípravky obsahující DRSP only</Text></View>
                        </View>
                    </View>
           
                    <Image source={require("../../../assets/last_table.png")} style={{
                        resizeMode: "contain",
                        width: 1200,
                        height: 650,
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom: 200
                    }} />
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                </View>
            </View>
            <Text style={{ marginBottom: 2800 }}></Text>
        </ScrollView >
    )
}

export default StudieAnalyzy

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
        zIndex: -2
    },
    wrapper: {
        width: width - 300,
        alignSelf: "center",

    }

})