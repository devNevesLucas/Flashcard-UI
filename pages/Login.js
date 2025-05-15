import { ImageBackground, TextInput, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/InputField";

export default function LoginPage() {
    return (
        <SafeAreaView style={{backgroundColor: "#4361EE", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground 
                source={require("../assets/fundo_login.png")}
                style={{width:'100%', height: '100%', justifyContent: 'space-evenly', alignItems: 'center'}}                
            >                
                <Text>Bem Vindo!</Text>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <InputField Texto="Digite o seu email"/>
                    <InputField Texto="Digite sua senha" Senha={true}/>

                    <View style={{flexDirection: "row", gap: "2%"}}>
                        <Text>Já possui uma conta?</Text>
                        <Text>Clique aqui!</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
