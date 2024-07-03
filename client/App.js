import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import DoctorsScreen from "./screens/Doctors";
import SignUpScreen from "./screens/SignUp";
import SignInScreen from "./screens/SignIn";
import ProfileScreen from "./screens/Profile";
import useScript from "./hooks/useScript";
import { GOOGLE_API_KEY } from "@env";
import UpdateProfileScreen from "./screens/UpdateProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  if (Platform.OS == "web") {
    useScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#007bff",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Doctors"
          component={DoctorsScreen}
          options={{
            title: "Doctors page",
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: "Register a new user",
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: "sign in",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "User page",
          }}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfileScreen}
          options={{
            title: "Personal data modification page",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
