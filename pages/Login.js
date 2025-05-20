import { ImageBackground, TextInput, Text, View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/InputField";
import ButtonPadrao from "../components/ButtonPadrao";


export default function LoginPage({navigation}) {

    const verificarLogin = () => {
        navigation.navigate('Signin')
    }

    return (
        <SafeAreaView style={{backgroundColor: "#4361EE", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground 
                source={require("../assets/fundo_login.png")}
                style={{width:'100%', height: '100%', justifyContent: 'space-evenly', alignItems: 'center'}}     
                blurRadius={2}
                resizeMode="cover"  
            >                
                <Text style={estilo.texto_bemVindo}>Bem Vindo!</Text>

                <View style={estilo.container_principal}>
                    <InputField Texto="Digite o seu email"/>
                    <InputField Texto="Digite sua senha" Senha={true}/>

                    <View style={{flexDirection: "row", gap: "2%"}}>
                        <Text>Já possui uma conta?</Text>
                        <Text>Clique aqui!</Text>
                    </View>
                </View>

                <ButtonPadrao 
                    textoBotao="Entrar"    
                    handlePress={verificarLogin}                  
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const estilo = StyleSheet.create({
    texto_bemVindo: {
        fontSize: 32,
        fontWeight: "bold",
        fontFamily: "poppins",
        color: "#FDFDFD"
    },
    container_principal: {
        width: "80%", 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "#172430",
        borderRadius: 10,
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingRight: "10%",
        paddingLeft: "10%"

    }

});