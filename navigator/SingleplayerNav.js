import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleplayerHome from "../pages/SinglePlayerHome";


const Stack = createNativeStackNavigator();

export default function SingleplayerNav() {

    return (
        <Stack.Navigator initialRouteName="SingleplayerHome">
            <Stack.Screen name='SingleplayerHome' component={SingleplayerHome}/>
        </Stack.Navigator>
    )
}

/*
<Stack.Screen name='SingleplayerHome' component={SingleplayerHome}/>

*/