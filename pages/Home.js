import { Text, Button, View, ImageBackground, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonPadrao from "../components/ButtonPadrao";
import { useUser } from "../context/user/useUser";
import PerfilContainer from "../components/PerfilContainer";
import ContagemDias from "../components/ContagemDias";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomePage({navigation}) {

    const { user, setUser } = useUser();

    const logout = async () => {
        await AsyncStorage.removeItem('user');
        setUser(null);
    }

    const entrarSinglePlayer = () => {
        navigation.navigate('Singleplayer');
    }

    return (
        <SafeAreaView style={{backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require('../assets/fundo_home.png')}
                style={{width:'100%', height: '100%', display: 'flex', alignItems: 'center'}}  
                blurRadius={2}
                resizeMode="cover"
            >
                <PerfilContainer User={user} />

                <View style={{width: '100%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <ContagemDias User={user} />

                    <View style={{width: "100%", height: "25%", alignItems: 'center', gap: 10}}>
                        <ButtonPadrao
                            textoBotao="Estudar sozinho"
                            ModoEscuro={true}                            
                            Altura="45%"
                            handlePress={entrarSinglePlayer}
                        />
                        <ButtonPadrao 
                            textoBotao="Estudar em grupo"
                            ModoEscuro={true}
                            Altura="45%"
                            Desativado
                        />
                    </View>

                    <Pressable onPress={logout} style={{backgroundColor: "#5F79F0", borderRadius: 5, paddingVertical: 5, paddingHorizontal: 15}}>
                        <Text style={{color: '#FDFDFD', fontSize: 15}}>Sair</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )




}