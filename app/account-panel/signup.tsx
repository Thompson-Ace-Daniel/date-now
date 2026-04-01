import { Accessibility, PhoneIcon } from "lucide-react-native";
import React, { useState, } from "react";
import { useRouter } from "expo-router";
import { Button, Image , StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView,} from "react-native-safe-area-context";
import logo from "../../assets/images/datenowlogo4.png"
export default function Login({}) {
  const [email, setEmail] = useState("");
  const [password, Setpassword] = useState("");
  const router = useRouter();
  const link = "account-panel/login"
  const [secure, setSecure] = useState("");  
  return (
    <SafeAreaView style={Styles.container}>
      <Image source={logo} style={Styles.logo}/>
      <Text
        style={{
          padding: 0,
          margin: 10,
          color: "white",
          lineHeight: 30,
          fontWeight: "bold",
          fontSize:12
        }}
      >
        By tapping 'continue' you agree to our{" "}
        <Text style={{ textDecorationLine: "underline", color: "white" }}>
          Terms
        </Text>
        . Learn how we process your data in our{" "}
        <Text style={{ textDecorationLine: "underline", color: "white" }}>
          Privacy Policy 
        </Text>
        , and{" "}
        <Text style={{ textDecorationLine: "underline", color: "white" }}>
          Cookies Policy.
        </Text>
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            display: "flex",
            borderWidth: 1,
            borderColor: "white",
            padding: 10,
            textAlign: "center",
            borderRadius: 50,
            backgroundColor: "white",
          }}
        >
          <Accessibility /> Continue With Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            display: "flex",
            borderWidth: 1,
            borderColor: "white",
            padding: 10,
            textAlign: "center",
            borderRadius: 50,
            backgroundColor: "white",
            marginTop: 20,
          }}
        >
          <PhoneIcon/> Continue With Phone
        </Text>
      </TouchableOpacity>
      <Text style={{color:"white", textAlign:"center", marginTop:10}}>Already have an account? <Text onPress={()=>router.push(link)}  style={{color:"white", textDecorationLine:"underline"}}>Sign in</Text> </Text>
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Segoe Ui",
    justifyContent: "center",
    backgroundColor: "#f94e15",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 32,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    width: 300,
    marginLeft:"auto",
    marginRight:"auto",
    height: 300,
    textAlign: "center",
  },
});
