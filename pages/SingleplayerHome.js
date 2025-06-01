import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../context/user/useUser";
import { Button, FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import PerfilContainer from "../components/PerfilContainer";
import Deck from "../components/Deck";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function SingleplayerHome(props) {

    const { user, setUser } = useUser();

    const [decks, setDecks] = useState([]);

    const navegarNewDeck = () => {
        props.navigation.navigate('NewDeck')
    }

    useFocusEffect(    
        useCallback(() => {         
            const carregarDecks = async () => {

                try {

                    const token = await AsyncStorage.getItem('token');
                    
                    const url = `${process.env.EXPO_PUBLIC_BACKEND}/deck/listarDecks`;

                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json',
                            'authorization': `Bearer ${token}`
                        }   
                    });

                    const decksObtidos = await response.json();

                    setDecks(decksObtidos);

                } catch (error) {
                    console.error(error);
                }
            };

            carregarDecks();
        }, [])
    )


    const deckDesafioDiario = {
        codigo_deck: 999, nome_deck: 'Modo aleatório - Todos os seus Decks', cor_deck: '#5B2B99', qtd_deck: 50, meta_deck: 25 
    }

    return (
        <SafeAreaView style={{backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require('../assets/fundo_singleplayer_home.png')}
                style={{width:'100%', height: '100%', display: 'flex', alignItems: 'center'}}  
                blurRadius={2}
                resizeMode="cover"
            >
            
            <PerfilContainer User={user} Navigation={props.navigation}/>

            <View style={{width: '85%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>

                <View style={{flexDirection: "column", height: "60%"}}>
                    <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10}}>
                        <Text style={{fontSize: 24, color: "#FDFDFD" }}>Meus Decks</Text>
                        <TouchableOpacity onPress={navegarNewDeck}>
                            <View style={{backgroundColor: "#4361EE", borderRadius: 5, paddingVertical: 12, paddingHorizontal: 22}}>
                                <Text style={{fontSize: 14, color: '#FDFDFD'}}>+ Novo deck</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <FlatList 
                        data={decks}
                        renderItem={({ item }) => <Deck Deck={item} Navigation={props.navigation} />}
                        keyExtractor={(item) => item.codigo_deck}
                        
                    />
                </View>

                <View style={{flexDirection: "column", width: "100%", height: "20%"}}>
                    <Text style={{ fontSize: 24, color: "#FDFDFD", marginBottom: 10 }}>Desafio diário</Text>
                    <Deck Deck={deckDesafioDiario} />
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}