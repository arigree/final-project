import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from "react-native";
import React, { useState } from "react";
import { auth } from "../../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { router, useRouter } from "expo-router";
import { TextInput, Button } from "react-native-paper";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)/three");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        alert("Failed to sign in: " + error.message);
      } else {
        alert("Failed to sign in: An unknown error occurred.");
      }
    }
  };

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)/three");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        alert("Failed to sign up: " + error.message);
      } else {
        alert("Failed to sign up: An unknown error occurred.");
      }
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/AdobeStock_543944337.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <Text style={styles.title}>Sign In or Create Account</Text>
        <TextInput
          style={styles.input}
          mode="flat"
          autoCapitalize="none"
          value={email}
          keyboardType="email-address"
          placeholder="Email Address..."
         
          onChangeText={(text) => setEmail(text)}
          
        />
        <TextInput
          style={styles.input}
          mode="flat"
          value={password}
          secureTextEntry={true}
          placeholder="Password..."
         
          onChangeText={(text) => setPassword(text)}
          
        />
        <Button mode="contained" style={styles.button} onPress={signUp}>
          Sign Up
        </Button>
        <Button mode="contained" style={styles.button} onPress={signIn}>
          Sign In
        </Button>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    marginVertical: 10,
    backgroundColor: "#D3D3D3",
    color: "black",
    fontSize: 16,
    zIndex: 10
  },
  button: {
    marginTop: 10,
    width: "90%",
    backgroundColor: "#590202",
  },
});
