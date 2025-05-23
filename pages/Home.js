import { Text, Button, View, ImageBackground, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonPadrao from "../components/ButtonPadrao";
import { useUser } from "../context/user/useUser";
import PerfilContainer from "../components/PerfilContainer";

export default function HomePage() {

    const { user, setUser } = useUser();

    return (
        <SafeAreaView style={{backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require('../assets/fundo_home.png')}
                style={{width:'100%', height: '100%', justifyContent: 'space-evenly', alignItems: 'center'}}  
                blurRadius={2}
                resizeMode="cover"
            >
            <PerfilContainer User={user}/>
            <Text>
                PLACEHOLDER DA CONTAGEM DOS DIAS
            </Text>
            <ButtonPadrao 
                textoBotao="Estudar sozinho"
                ModoEscuro={true}
            />
            <ButtonPadrao 
                textoBotao="Estudar em grupo"
                ModoEscuro={true}
            />

                <Pressable onPress={() => setUser(null)}>
                    <Text>Sair</Text>
                </Pressable>
            </ImageBackground>
    
        </SafeAreaView>
    )

}