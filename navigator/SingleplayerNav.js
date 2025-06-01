import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleplayerHome from "../pages/SingleplayerHome";
import NewDeck from "../pages/NewDeck";
import DeckPage from "../pages/DeckPage";
import QuestionPage from "../pages/QuestionPage";
import CardsPage from "../pages/CardsPage";


const Stack = createNativeStackNavigator();

export default function SingleplayerNav() {

    return (
        <Stack.Navigator initialRouteName="SingleplayerHome" screenOptions={{ headerShown:false }}>
            <Stack.Screen name='SingleplayerHome' component={SingleplayerHome}/>
            <Stack.Screen name='NewDeck' component={NewDeck} />
            <Stack.Screen name='Deck' component={DeckPage} />
            <Stack.Screen name='Question' component={QuestionPage} />
            <Stack.Screen name='Cards' component={CardsPage} />
        </Stack.Navigator>
    )
}
