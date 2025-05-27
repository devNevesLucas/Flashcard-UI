import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import SingleplayerNav from "./SingleplayerNav";
//import SingleplayerNav from './SingleplayerNav';

const BottomTab = createBottomTabNavigator();

export default function MainNavigator() {

    return (
        <BottomTab.Navigator 
            initialRouteName="Home" 
            screenOptions={ ({ route }) => ({ 
                headerShown: false,
                tabBarIcon: ({ size }) => {
                    let iconName = '';

                    if (route.name == "Home")
                        iconName = 'home';
                
                    if (route.name == "Singleplayer")
                        iconName = 'user';

                    if (route.name == "Multiplayer")
                        iconName = 'users';

                    return <FontAwesome name={iconName} size={20} color='#D9D9D9'/>
                },
                tabBarStyle: {
                    position: 'absolute',
                    zIndex: 20,
                    elevation: 0,
                    borderTopWidth: 0,
                    shadowOpacity: 0,
                    backgroundColor: '#172430'
                },
                tabBarActiveTintColor: '#FDFDFD',
                tabBarInactiveTintColor: '#273746'
            })}
            >                
            <BottomTab.Screen name="Home" component={HomePage} />
            <BottomTab.Screen name='Singleplayer' component={SingleplayerNav} />
        </BottomTab.Navigator>
    )
}

//             <BottomTab.Screen name="Singleplayer" component={SingleplayerNav} />