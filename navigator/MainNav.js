import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/Home";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
}
