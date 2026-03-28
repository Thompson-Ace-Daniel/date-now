import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import logo from "../../assets/images/datenowlogo4.png";
export default function Login() {
  const [email, setEmail] = useState<String>("");
  const router = useRouter();
  const [password, setPassword] = useState<String>("");

const handleLogin = () => {
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  router.replace("/account-panel/location");
};
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 32,
          marginBottom: 10,
          marginTop: 0,
        }}
      >
        Welcome Back!
      </Text>
      <View style={styles.login}>
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            fontSize: 20,
          }}
        >
          Login To Account
        </Text>
        <View style={{ marginTop: 10 }}>
          <TextInput
            placeholder="Enter Email to Continue"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            style={styles.input}
          />

          <TextInput
            placeholder="Enter Password to Continue"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>
        <Pressable onPress={() => handleLogin()} style={styles.submit}>
          <Text style={{ textAlign: "center", color: "white" }}>Login</Text>
        </Pressable>
      </View>
      <Text style={{ color: "white", textAlign: "center" }}>
        Do not have an Account?{" "}
        <Text
          onPress={() => router.replace("/account-panel/signup")}
          style={{ textDecorationLine: "underline", color: "white" }}
        >
          Signup
        </Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#f94e15",
    fontFamily: "Segoe Ui",
  },
  logo: {
    width: 300,
    height: 230,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 0,
  },
  login: {
    borderWidth: 1,
    width: 300,
    marginLeft: "auto",
    marginTop: 10,
    marginBottom: 20,
    height: 250,
    borderColor: "white",
    marginRight: "auto",
    backgroundColor: "white",
    borderRadius: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
  },
  submit: {
    borderWidth: 1,
    width: 150,
    margin: "auto",
    padding: 15,
    backgroundColor: "#f44911",
    borderColor: "white",
    borderRadius: 10,
  },
});
