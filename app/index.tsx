import { StyleSheet, Pressable, Animated, ImageBackground, View, Text, Dimensions } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState, useRef} from "react";
//@ts-ignore
import TypingText from "react-native-typical";
export default function Page() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  Animated.sequence([
      Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver:true,
        }),
      Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver:true,
        })
  ]).start();

  useEffect(() => {
      setLoadAnimatedComponents(true);
      return () => {
        setLoadAnimatedComponents(false);
        fadeAnim.setValue(0);
      }
  });
  const [loadAnimatedComponents, setLoadAnimatedComponents] = useState(false);
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
          <ImageBackground source={require("../assets/bgd.png")} style={
            {
              width:"100%",
              height:"100%",
            }
          }>
               <View style={[styles.textbanner, {
                    marginTop:h/3 || 100,
               }]}>
                    <Text style={{
                        fontFamily:"Museo",
                        color:"#612751",
                        fontSize:40,
                       
                    }}>
                MODERNÍ
                    </Text>
               {loadAnimatedComponents?<TypingText
                steps={["přelomová forma\nantikoncepce..."]}
                loop={1}
                blinkCursor={false}
                style={{fontFamily:"Museo",
                color:"#E81E75",
                fontSize:35,}}
            />:<></>}
                     <Animated.Image style={{
                         resizeMode:"contain",
                         width:250,
                         height:200,
                         opacity:fadeAnim
                     }} source={require("../assets/final_logo.png")} />   
              </View>
           </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg:{
      flex:1,
      resizeMode:"contain",
  },
  textbanner:{
      position:"absolute",
      right:0,
     // marginTop:height/3,
      marginRight:20,
      width:300
  }
});