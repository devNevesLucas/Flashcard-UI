import { Text, Button, View, ImageBackground, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonPadrao from "../components/ButtonPadrao";
import { useUser } from "../context/user/useUser";
import PerfilContainer from "../components/PerfilContainer";
import ContagemDias from "../components/ContagemDias";

export default function HomePage() {

    const { user, setUser } = useUser();

    return (
        <SafeAreaView style={{backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require('../assets/fundo_home.png')}
                style={{width:'100%', height: '100%', display: 'flex', alignItems: 'center'}}  
                blurRadius={2}
                resizeMode="cover"
            >
                <PerfilContainer User={user}/>

                <View style={{width: '100%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                    <ContagemDias />

                    <View style={{width: "100%", alignItems: 'center', gap: 10}}>
                        <ButtonPadrao
                            textoBotao="Estudar sozinho"
                            ModoEscuro={true}                            
                            Altura="22%"
                        />
                        <ButtonPadrao 
                            textoBotao="Estudar em grupo"
                            ModoEscuro={true}
                            Altura="22%"
                        />
                    </View>

                    <Pressable onPress={() => setUser(null)}>
                        <Text style={{color: '#000000'}}>Sair</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )




}