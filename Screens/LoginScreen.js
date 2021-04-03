import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const showAlert = () => {
    Alert.alert("Successfully Logged In", `Welcome ${email} to CommerceCart`);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-01.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#D3D3D3"
          value={email}
          autoFocus
          onChangeText={onChangeEmail}
          keyboardType={"email-address"}
          //   onSubmitEditing={(event) => this.textHandler(event.nativeEvent.text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#D3D3D3"
          value={password}
          secureTextEntry
          onChangeText={onChangePassword}

          //   onSubmitEditing={(event) => textHandler(event.nativeEvent.text)}
        />
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 14,
  },
  inputView: {
    width: 200,
    borderRadius: 20,
    borderColor: "white",
    backgroundColor: "white",
    // borderRadius: 25,
    height: 50,
    paddingLeft: 10,
    marginBottom: 20,
    // justifyContent: "center",
    // padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    marginTop: 10,
    // paddingLeft: 10,
    // paddingLeft: 35,
    color: "white",
    fontSize: 12,
  },
  loginText: {
    paddingLeft: 5,
    color: "white",
    fontSize: 12,
  },
  loginBtn: {
    width: 200,
    backgroundColor: "#EE3625",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  signupBtn: {
    width: 200,
    borderWidth: 2,
    borderColor: "#EE3625",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 40,
    marginBottom: 10,
  },
  signupText: {
    color: "white",
  },
});
export default LoginScreen;
