import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleplayerHome from "../pages/SingleplayerHome";
import NewDeck from "../pages/NewDeck";
import DeckPage from "../pages/DeckPage";


const Stack = createNativeStackNavigator();

export default function SingleplayerNav() {

    return (
        <Stack.Navigator initialRouteName="SingleplayerHome" screenOptions={{ headerShown:false }}>
            <Stack.Screen name='SingleplayerHome' component={SingleplayerHome}/>
            <Stack.Screen name='NewDeck' component={NewDeck} />
            <Stack.Screen name='Deck' component={DeckPage}/>
        </Stack.Navigator>
    )
}
