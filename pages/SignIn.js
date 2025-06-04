import { SafeAreaView,ImageBackground, View, StyleSheet, Text, Pressable } from "react-native";
import InputField from "../components/InputField";
import ButtonPadrao from "../components/ButtonPadrao";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "../context/user/useUser";

export default function SignInPage({navigation}) {

    const navegarTelaLogin = () => {
        navigation.navigate('Login')
    }

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

    const { user, setUser } = useUser();

    const criarUsuario = async () => {

        if (nome == "" || email == "" || senha != confirmacaoSenha || senha < 8) return;

        try {
            
            const url = `${process.env.EXPO_PUBLIC_BACKEND}/user/inserir`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha
                })
            });

            const dados = await response.json();
            
            await AsyncStorage.removeItem('user');
            await AsyncStorage.removeItem('token');

            await AsyncStorage.setItem('user', JSON.stringify(dados.usuario));
            await AsyncStorage.setItem('token', dados.token);

            setUser(dados.usuario);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={{backgroundColor: "#4361EE", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require("../assets/fundo_signin.png")}
                style={{width:'100%', height: '100%', justifyContent: 'space-evenly', alignItems: 'center'}}     
                blurRadius={2}
                resizeMode="cover"
            >
                <View style={estilo.container_principal}>
                    <Text style={estilo.texto_bemVindo}>Bem Vindo!</Text>

                    <View style={{width: "100%"}}>        
                        <InputField Texto="Nome de usuário" TemaEscuro SetItem={setNome} />            
                        <InputField Texto="E-mail" TemaEscuro SetItem={setEmail} />
                        <InputField Texto="Senha" TemaEscuro Senha={true} SetItem={setSenha} />
                        <InputField Texto="Confirme sua senha" TemaEscuro Senha={true} SetItem={setConfirmacaoSenha} />
                    </View>    

                    <View style={{flexDirection: "row", gap: "2%"}}>
                        <Text style={{color: "#FDFDFD"}}>Já possui conta?</Text>
                        <Pressable onPress={navegarTelaLogin}>
                            <Text style={{color: "#4361EE"}}>Clique aqui!</Text>
                        </Pressable>
                    </View>
                </View>
                <ButtonPadrao 
                    textoBotao="Criar conta"    
                    handlePress={criarUsuario}
                />
            </ImageBackground>            
        </SafeAreaView>
    )
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
        height: "65%",
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