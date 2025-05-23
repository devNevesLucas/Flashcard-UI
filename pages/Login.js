import { ImageBackground, TextInput, Text, View, Button, StyleSheet, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import InputField from "../components/InputField";
import ButtonPadrao from "../components/ButtonPadrao";
import { useUser } from "../context/user/useUser";

export default function LoginPage({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const {user, setUser } = useUser();

    const verificarLogin = () => {

        const usuario = {
            nome: 'neves',
            email: 'neves@email.com',
            nivel: 1,
            pontuacao: 0
        }

        setUser(usuario)
    }

    const navegarTelaSignIn = () => {
        navigation.navigate('Signin');
    }

    return (
        <SafeAreaView style={{backgroundColor: "#4361EE", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground 
                source={require("../assets/fundo_login.png")}
                style={{width:'100%', height: '100%', justifyContent: 'space-evenly', alignItems: 'center'}}     
                blurRadius={2}
                resizeMode="cover"  
            >

                <View style={estilo.container_principal}>
                    <Text style={estilo.texto_bemVindo}>Bem Vindo!</Text>

                    <View style={{width: "100%"}}>                    
                        <InputField Texto="Digite o seu email" SetItem={setEmail} />
                        <InputField Texto="Digite sua senha" Senha={true} SetItem={setSenha} />
                    </View>
                
                    <View style={{flexDirection: "row", gap: "2%"}}>
                        <Text style={{color: "#FDFDFD"}}>Não possui conta?</Text>
                        <Pressable onPress={navegarTelaSignIn}>
                            <Text style={{color: "#4361EE"}}>Clique aqui!</Text>
                        </Pressable>
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
        width: "85%", 
        height: "60%",
        justifyContent: 'space-around', 
        alignItems: 'center', 
        backgroundColor: "#172430",
        borderRadius: 10,
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingRight: "10%",
        paddingLeft: "10%"
    }
});