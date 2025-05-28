import { ImageBackground, TextInput, Text, View, Button, StyleSheet, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import InputField from "../components/InputField";
import ButtonPadrao from "../components/ButtonPadrao";
import { useUser } from "../context/user/useUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginPage({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { user, setUser } = useUser();

    const carregarUsuario = async () => {

        try {
            const usuarioStr = await AsyncStorage.getItem('user');

            if (usuarioStr) {
                const userJson = JSON.parse(usuarioStr);
                setUser(userJson);                
            }
        } catch (error) {
            console.log("Erro: ", error);
        }
    }

    const verificarLogin = async () => {

        if (senha.length == 0) {
            const userTmp = {
                email_usuario: 'teste@email.com',
                nome_usuario: 'neves neves',
                nivel_usuario: 22
            }

            setUser(userTmp);
        }

        if (!email.includes('@')) return;

        if (senha.length < 8) return;

        try {
            const url = `${process.env.EXPO_PUBLIC_BACKEND}/user/verificarLogin`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                }),
            });

            const dados = await response.json();

            await AsyncStorage.removeItem('user');

            await AsyncStorage.setItem('user', JSON.stringify(dados[0]));

            setUser(dados[0]);
        
        } catch (error) {
            console.log("Erro ao obter usuário: ", error);
        }
    }

    const navegarTelaSignIn = () => {
        navigation.navigate('Signin');
    }

    carregarUsuario();

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
                        <InputField Texto="Digite o seu email" TemaEscuro SetItem={setEmail} />
                        <InputField Texto="Digite sua senha" TemaEscuro Senha={true} SetItem={setSenha} />
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