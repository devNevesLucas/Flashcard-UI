import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleplayerHome from "../pages/SingleplayerHome";
import NewDeck from "../pages/NewDeck";


const Stack = createNativeStackNavigator();

export default function SingleplayerNav() {

    return (
        <Stack.Navigator initialRouteName="SingleplayerHome" screenOptions={{ headerShown:false }}>
            <Stack.Screen name='SingleplayerHome' component={SingleplayerHome}/>
            <Stack.Screen name='NewDeck' component={NewDeck} />
        </Stack.Navigator>
    )
}
