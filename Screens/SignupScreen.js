import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";

const SignupScreen = ({ navigation }) => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [password, onChangePassword] = useState("");
  const [email, onChangeEmail] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-01.png")} />
      <TextInput
        style={styles.inputText}
        placeholder="First Name"
        placeholderTextColor="#D3D3D3"
        value={firstName}
        autoFocus
        onChangeText={onChangeFirstName}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Last Name"
        placeholderTextColor="#D3D3D3"
        value={lastName}
        autoFocus
        onChangeText={onChangeLastName}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        placeholderTextColor="#D3D3D3"
        value={email}
        autoFocus
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Password"
        placeholderTextColor="#D3D3D3"
        value={password}
        autoFocus
        onChangeText={onChangePassword}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Confirm Password"
        placeholderTextColor="#D3D3D3"
        value={confirmPassword}
        autoFocus
        onChangeText={onChangeConfirmPassword}
      />
      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 14,
  },
  inputText: {
    marginTop: 10,
    paddingLeft: 7,
    width: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    // backgroundColor: "black",
  },
  registerBtn: {
    marginTop: 9,
    width: 270,
    backgroundColor: "lightgreen",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  registerText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
});

export default SignupScreen;
