import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/Home";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
    )
}
