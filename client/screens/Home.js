import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text } from "react-native-elements";
import styles from "../styles/homeStyles";

export default function HomeScreen(props) {
  const { navigation } = props;

  const [token, setToken] = useState("");

  useEffect(() => {
    const refreshToken = navigation.addListener("focus", () => {
      _checkToken();
    });
    return refreshToken;
  }, [navigation]);

  const _checkToken = async () => {
    const token = await AsyncStorage.getItem("accessToken");
    setToken(token);
  };

  return (
    <ImageBackground
      source={require("../assets/doc-bg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>welcome to my doctor app</Text>
        <Text style={styles.text}>
          The best application to connect doctors and patients
        </Text>
        {token ? (
          <>
            <Button
              title="Browse list of doctors"
              onPress={() => navigation.navigate("Doctors")}
            />
            <Button
              type="clear"
              title="personal page"
              onPress={() => navigation.navigate("Profile")}
            >
              <Text style={styles.labelButton}>View profile</Text>
            </Button>
          </>
        ) : (
          <>
            <Button
              title="sign in"
              onPress={() => navigation.navigate("SignIn")}
            />
            <Button
              type="clear"
              title="Sign up"
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.labelButton}>Create a new account</Text>
            </Button>
          </>
        )}
      </View>
    </ImageBackground>
  );
}
