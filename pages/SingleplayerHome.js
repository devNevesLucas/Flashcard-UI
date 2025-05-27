import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../context/user/useUser";
import { ImageBackground, View } from "react-native";
import PerfilContainer from "../components/PerfilContainer";

export default function SingleplayerHome() {

    const { user, setUser } = useUser();

    return (
        <SafeAreaView style={{backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require('../assets/fundo_singleplayer_home.png')}
                style={{width:'100%', height: '100%', display: 'flex', alignItems: 'center'}}  
                blurRadius={2}
                resizeMode="cover"
            >
            
            <PerfilContainer User={user} />

            <View style={{width: '100%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>

            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}