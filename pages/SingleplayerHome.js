import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../context/user/useUser";
import { Button, FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import PerfilContainer from "../components/PerfilContainer";
import Deck from "../components/Deck";

export default function SingleplayerHome(props) {

    const { user, setUser } = useUser();

    const navegarNewDeck = () => {
        props.navigation.navigate('NewDeck')
    }

    const decksTmp = [
        {codigo_deck: 1, nome_deck: 'Estrutura de dados', cor_deck: '#FF3B30', qtd_deck: 20, meta_deck: 12},
        {codigo_deck: 2, nome_deck: 'Processos estocásticos', cor_deck: '#14AE5C', qtd_deck: 11, meta_deck: 3},
        {codigo_deck: 3, nome_deck: 'Cálculo numérico', cor_deck: '#C00F0C', qtd_deck: 27, meta_deck: 8},
        {codigo_deck: 4, nome_deck: 'Inteligência artificial', cor_deck: '#E5A000', qtd_deck: 40, meta_deck: 17},
        {codigo_deck: 5, nome_deck: 'Direito digital', cor_deck: '#9747FF', qtd_deck: 15, meta_deck: 7},
        {codigo_deck: 6, nome_deck: 'Direito digital', cor_deck: '#9747FF', qtd_deck: 15, meta_deck: 7},
    ]

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
                        data={decksTmp}
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