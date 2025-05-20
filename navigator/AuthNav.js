import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import LoginPage from "../pages/Login";
import SignInPage from "../pages/SignIn";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Signin" component={SignInPage} />
        </Stack.Navigator>
    )
}