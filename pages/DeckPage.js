import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, View, Text, Pressable, FlatList } from "react-native";
import PerfilContainer from "../components/PerfilContainer";
import { useUser } from "../context/user/useUser";
import ButtonPadrao from "../components/ButtonPadrao";
import { useState } from "react";
export default function DeckPage(props) {
    
    const { user, setUser } = useUser();

    const [qtdCartas, setQtdCartas] = useState(1);

    const deckTmp = {
        nome_deck: "Estrutura de dados",
        cor_deck: "#FF3B30",
        qtd_deck: 20,
        meta_deck: 12,
        criacao_deck: '15/04/2025',
        ultimo_estudo_deck: '19/04/2025',
        qtd_acertos_deck: 14
    }

    let quantidades = [
        { posicao: 0, valor: 1 },
        { posicao: 1, valor: 5 }, 
        { posicao: 2, valor: deckTmp.meta_deck }, 
        { posicao: 3, valor: deckTmp.qtd_deck }
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

        if (item.posicao == quantidades.length - 1) {
            textoEscrito = "todas!";
            estilosBordas = { borderEndStartRadius: 5, borderEndEndRadius: 5 };
        }

        return (
            <Pressable onPress={setQtdCartas(item.valor)} style={[estilosBordas, {backgroundColor: corBackground}, {paddingHorizontal: 15, paddingVertical: 10}]}>
                <Text style={{color: "#FDFDFD", fontSize: 15}}>{textoEscrito}</Text>
            </Pressable>
        )
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

            <View style={{width: '85%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>

                <View style={{width: "100%", height: "60%", flexDirection: "column", alignItems: "start", justifyContent: "space-between"}}>
                    <Text style={{color: "#FDFDFD", fontSize: 24}}>{deckTmp.nome_deck}</Text>
                    <View style={{width: "100%", height: "90%"}}>
                        <View style={{width: "100%", height: "8%", borderStartStartRadius: 15, borderEndStartRadius: 15, backgroundColor:deckTmp.cor_deck}}></View>
                        <View style={{width: "100%", height: "92%", borderStartEndRadius: 15, borderEndEndRadius: 15, backgroundColor: "#172430"}}>
                        </View>
                    </View>
                </View>

                <View style={{width: "100%", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <FlatList 
                        data={quantidades}
                        renderItem={ButtonCarta}
                        keyExtractor={(item) => item.posicao}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    <ButtonPadrao textoBotao="Iniciar!" ModoEscuro Altura="25%"/>
                </View>

            </View>
            </ImageBackground>
        </SafeAreaView>
    )

}