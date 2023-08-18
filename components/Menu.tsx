import React, { useContext} from 'react'
import { StyleSheet, View} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { GlobalContext } from '../context/GlobalContext';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
const Menu = () => {
    const { currentMenu, setMenu } = useContext<any>(GlobalContext);
    return (
        <View style={styles.appleMenu}>
            <View style={styles.appleSubStyle}>

                <Link href="/" onPress={() => {
                    setMenu("/");
                }} style={[styles.appleBg, currentMenu === "/" && styles.selectedMenuItem, {    
                }]}>
                    <AntDesign name="home" size={30} color="white" />
                </Link>

                <Link href="/ucinnost/UcinnostMain" onPress={() => {
                    setMenu("ucinnost");
                }} style={[styles.appleBg, currentMenu === "ucinnost" && styles.selectedMenuItem]}>
                    <AntDesign name="linechart" size={30} color="white" />
                </Link>

                <Link href="/bezpecnost/BezpecnostMain" onPress={() => {
                    setMenu("bezpecnost");
                }} style={[styles.appleBg, currentMenu === "bezpecnost" && styles.selectedMenuItem]}>
                    <AntDesign name="Safety" size={30} color="white" />
                </Link>

                <Link href="/setrnost/SetrnostMain" onPress={() => {
                    setMenu("setrnost");
                }} style={[styles.appleBg, currentMenu === "setrnost" && styles.selectedMenuItem]}>
                    <AntDesign name="hearto" size={30} color="white" />
                </Link>

                <Link href="/estetrol/EstetrolMain" onPress={() => {
                    setMenu("estetrol");
                }} style={[styles.appleBg, currentMenu === "estetrol" && styles.selectedMenuItem]}>
                    <AntDesign name="medicinebox" size={30} color="white" />
                </Link>

                <Link href="/data/Data" onPress={() => {
                    setMenu("data");
                }} style={[styles.appleBg, currentMenu === "data" && styles.selectedMenuItem]}>
                    <MaterialIcons name="data-usage" size={30} color="white" />
                </Link>

                <Link href="/spc/SPC" onPress={() => {
                    setMenu("spc");
                }} style={[styles.appleBg, currentMenu === "spc" && styles.selectedMenuItem]}>
                    <AntDesign name="pdffile1" size={30} color="white" />
                </Link>
            </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    appleMenu: {
        zIndex: 10,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        // shadowColor: "black",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 10,
    },
    appleSubStyle: {
        flexDirection: "row",
        // shadowColor: "black",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 10,
        backgroundColor: "#ffffff4f",
        padding: 10,
        borderRadius: 15,
        margin: 4
    },
    appleBg: {
        backgroundColor: "#5c294fd9",
        flexDirection: "row",
        margin: 5,
        padding: 20,
        borderRadius: 15,

        borderColor: "grey",
        // shadowColor: "black",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 20,
    },
    selectedMenuItem: {
        backgroundColor: "#7eb1c6c2",
        shadowColor: "black",
        borderBottomWidth: 4,
        borderBottomColor: "white",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.55,
        // shadowRadius: 3.84,
        // elevation: 40,
    }
})
