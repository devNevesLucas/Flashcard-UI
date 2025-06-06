import { ImageBackground, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PerfilContainer from "../components/PerfilContainer";
import { useUser } from "../context/user/useUser";
import ButtonPadrao from '../components/ButtonPadrao'
import InputField from '../components/InputField'
import Slider from '@react-native-community/slider';
import { useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NewDeck(props) {

    const { user, setUser } = useUser();
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [nomeDeck, setNomeDeck] = useState('');

    const salvarDeck = async () => {

        if (nomeDeck == '') return;

        try {

            const token = await AsyncStorage.getItem('token');            

            const url = `${process.env.EXPO_PUBLIC_BACKEND}/deck/inserir`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 
                    'Content-type': 'application/json', 
                    'authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({
                    nome_deck: nomeDeck,
                    cor_deck: calcularCor()
                })
            });

            const dados = await response.json();

            if (dados) {
                props.navigation.goBack();
            }

        } catch (error) {

            console.error(error);

        }

    }

    const calcularCor = () => {
        let redTmp = red | 0;
        let greenTmp = green | 0;
        let blueTmp = blue | 0;

        let cor = `#${redTmp.toString(16).padStart(2, "0")}${greenTmp.toString(16).padStart(2, "0")}${blueTmp.toString(16).padStart(2, "0")}`;

        return cor;
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground
                source={require('../assets/fundo_new_deck.png')}
                style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}
                blurRadius={2}
                resizeMode="cover"
            >

                <PerfilContainer User={user} Navigation={props.navigation} />

                <View style={{ width: '85%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: "column", width: "100%", height: "50%" }}>
                        <View style={{ width: "100%", height: "20%", backgroundColor: calcularCor(), borderStartStartRadius: 15, borderEndStartRadius: 15 }}></View>
                        <View style={{ width: "100%", height: "80%", borderStartEndRadius: 15, borderEndEndRadius: 15, backgroundColor: "#FDFDFD", alignItems: "center", justifyContent: "space-around" }}>
                            <View style={{ width: "80%" }}>
                                <InputField Texto="Nome do deck" SetItem={setNomeDeck} />
                            </View>

                            <View style={{ width: "80%" }}>
                                <Text style={{ fontSize: 16 }}>Cor do deck</Text>
                                <Slider
                                    style={{ width: "100%", height: 50 }}
                                    minimumValue={0}
                                    maximumValue={255}
                                    onValueChange={setRed}
                                />
                                <Slider
                                    style={{ width: "100%", height: 50 }}
                                    minimumValue={0}
                                    maximumValue={255}
                                    onValueChange={setGreen}
                                />
                                <Slider
                                    style={{ width: "100%", height: 50 }}
                                    minimumValue={0}
                                    maximumValue={255}
                                    onValueChange={setBlue}
                                />
                            </View>
                        </View>
                    </View>

                    <ButtonPadrao textoBotao="Criar deck" handlePress={salvarDeck} />

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}