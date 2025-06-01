import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, View, Text, Pressable, FlatList } from "react-native";
import PerfilContainer from "../components/PerfilContainer";
import { useUser } from "../context/user/useUser";
import ButtonPadrao from "../components/ButtonPadrao";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DeckPage(props) {
    
    const { user, setUser } = useUser();

    const [qtdCartas, setQtdCartas] = useState(1);
    const [deck, setDeck] = useState({});

    const deckTmp = {
        nome_deck: "Estrutura de dados",
        cor_deck: "#FF3B30",
        qtd_deck: 20,
        meta_deck: 12,
        criacao_deck: '15/04/2025',
        ultimo_estudo_deck: '19/04/2025',
        qtd_acertos_deck: 14
    }

    useFocusEffect(
        useCallback(() => {

            const carregarDeck = async () => {

                try {

                    const token = await AsyncStorage.getItem('token');

                    const url = `${process.env.EXPO_PUBLIC_BACKEND}/deck/obterDeck/${props.route.params.CodigoDeck}`;

                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json',
                            'authorization': `Bearer ${token}`
                        }
                    })

                    const deckObtido = await response.json();

                    setDeck(deckObtido[0]);

                } catch (error) {
                    console.error(error);
                }
            };

            carregarDeck();
        }, [])
    );


    let quantidades = [
        { posicao: 0, valor: 1 },
        { posicao: 1, valor: 10 }, 
        { posicao: 2, valor: deck.meta_deck }, 
        { posicao: 3, valor: deck.qtd_deck }
    ]

    const ButtonCarta = ({item}) => {
        
        let textoEscrito = `${item.valor} cartas`;

        let corBackground = qtdCartas == item.valor ? "#4361EE" : "#042959";

        let estilosBordas = { }

        if (item.posicao == 0) {
            estilosBordas = { borderStartEndRadius: 5, borderStartStartRadius: 5 };
        }

        if (item.valor == 1)
            textoEscrito = `${item.valor} carta`

        if (item.valor == 0 && item.posicao != 3) return null;

        if (item.posicao == quantidades.length - 1) {
            textoEscrito = "todas!";
            estilosBordas = { borderEndStartRadius: 5, borderEndEndRadius: 5 };
        }

        return (
            <Pressable onPress={() => { setQtdCartas(item.valor) }} style={[estilosBordas, {backgroundColor: corBackground}, {paddingHorizontal: 12, paddingVertical: 10, alignItems: "center", justifyContent: "center"}]}>
                <Text style={{color: "#FDFDFD", fontSize: 15}}>{textoEscrito}</Text>
            </Pressable>
        )
    }

    const iniciarTeste = () => {
        props.navigation.navigate('Question');
    }

    const handleVerCards = () => {
        props.navigation.navigate('Cards');
    }

    return (
        <SafeAreaView style={{backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require("../assets/fundo_deck_page.png")}
                style={{width:'100%', height: '100%', display: 'flex', alignItems: 'center'}}  
                blurRadius={2}
                resizeMode="cover"
            >

            <PerfilContainer User={user} Navigation={props.navigation} />

            <View style={{width: '85%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginVertical: "5%"}}>

                <View style={{width: "100%", height: "65%", flexDirection: "column", alignItems: "start", justifyContent: "space-between"}}>
                    <Text style={{color: "#FDFDFD", fontSize: 24}}>{deck.nome_deck}</Text>
                    <View style={{width: "100%", height: "90%", borderRadius: 15, overflow: 'hidden'}}>
                        <View style={{width: "100%", height: "8%", backgroundColor:deck.cor_deck, borderTopLeftRadius: 15, borderTopRightRadius: 15}}></View>
                        <View style={{width: "100%", height: "92%", borderStartEndRadius: 15, borderEndEndRadius: 15, backgroundColor: "#172430", gap: 20, paddingHorizontal: 20, paddingVertical: 15}}>
                            
                            <Text style={{fontSize: 20, color: "#FDFDFD"}}>{deck.qtd_deck} cards</Text>
                            <View>
                                <Text style={{fontSize: 16, color: "#D9D9D9"}}>Meta para hoje:</Text>
                                <Text style={{fontSize: 16, color: "#FDFDFD"}}>{deck.meta_deck} cards</Text>                    
                            </View>
                            <View>
                                <Text style={{fontSize: 16, color: "#D9D9D9"}}>Criado em:</Text>
                                <Text style={{fontSize: 16, color: "#FDFDFD"}}>{deck.criacao_deck}</Text>                    
                            </View>
                            <View>
                                <Text style={{fontSize: 16, color: "#D9D9D9"}}>Estudado pela última vez em:</Text>
                                <Text style={{fontSize: 16, color: "#FDFDFD"}}>{!deck.ultimo_estudo_deck ? 'Nunca estudado' : deck.ultimo_estudo_deck}</Text>                    
                            </View>
                            <View>
                                <Text style={{fontSize: 16, color: "#D9D9D9"}}>Quantidade de acertos:</Text>
                                <Text style={{fontSize: 16, color: "#FDFDFD"}}>{deck.qtd_acertos_deck} acertos</Text>                    
                            </View>
                            <View style={{width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, marginTop: "3%"}}>
                                <Pressable style={{backgroundColor: "#14AE5C", padding: 10, width: "45%", borderRadius: 5, alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{fontsize: 12, color: "#FDFDFD"}}>Editar deck</Text>
                                </Pressable>
                                <Pressable onPress={handleVerCards} style={{backgroundColor: "#4361EE", padding: 10, width: "45%", borderRadius: 5, alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{fontsize: 12, color: "#FDFDFD"}}>Ver cards</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{width: "100%", flexDirection: "column", justifyContent: "start", alignItems: "start", gap: 10, marginTop: "5%"}}>
                    <Text style={{color: "#FDFDFD", fontSize: 24}}>Tamanho da rodada</Text>     
                    <View style={{width: "100%", height: "65%", alignItems: "center", gap: 10}}>
                        <View style={{width: "100%", height: "15%", alignItems: "center", justifyContent: "center"}}>
                            <FlatList 
                                data={quantidades}
                                renderItem={                                    
                                    ButtonCarta
                                }
                                keyExtractor={(item) => item.posicao}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}                        
                                />
                        </View>
                        <ButtonPadrao handlePress={iniciarTeste} textoBotao="Iniciar!" ModoEscuro Altura="25%"/>
                    </View>        
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}