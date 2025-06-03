import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, View, Text, FlatList } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'
import ButtonPadrao from "../components/ButtonPadrao";
import { useState } from "react";
import Alternativa from "../components/Alternativa";

export default function QuestionPage(props) {

    const handleVoltar = () => {
        props.navigation.goBack();
    }

    const [deck, setDeck] = useState(props.route.params.Deck);
    const [perguntas, setPerguntas] = useState(props.route.params.Perguntas);
    const [indexPerguntaAtual, setIndexPerguntaAtual] = useState(0);
    const [perguntaAtual, setPerguntaAtual] = useState(perguntas[indexPerguntaAtual]);
    const [pontuacao, setPontuacao] = useState(0);
    const [alternativaEscolhida, setAlternativaEscolhida] = useState(null);
    const [tamanhoBarra, setTamanhoBarra] = useState(100 / perguntas.length);

    const prosseguirTeste = () => {

        const alternativa = perguntaAtual.alternativas.find(alternativa => alternativa.codigo_alternativa == alternativaEscolhida);

        let indexAtual = indexPerguntaAtual + 1;
        if (alternativa.correta)
            setPontuacao(pontuacao + 1);

        setIndexPerguntaAtual(indexAtual);

            // LÓGICA DE PARADA VEM AQUI!!!!
        if (indexAtual == perguntas.length) {
            props.navigation.goBack();
        }        

        setPerguntaAtual(perguntas[indexAtual]);
        setAlternativaEscolhida(null);
        setTamanhoBarra((100 * (indexAtual) / perguntas.length));
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground
                source={require("../assets/fundo_question.png")}
                style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}
                blurRadius={2}
                resizeMode="cover"
            >
                <View style={{ width: '85%', flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <AntDesign onPress={handleVoltar} name="leftcircle" size={48} color="#172430" />
                    <View style={{ display: "flex", flexDirection: "row", width: "80%", height: "125%", backgroundColor: "#172430", borderRadius: 10, alignItems: "center", gap: 10 }}>
                        <View style={{ backgroundColor: deck.cor_deck, height: "100%", width: 15, borderStartStartRadius: 10, borderStartEndRadius: 10 }}></View>
                        <View style={{ display: "flex", width: "85%", alignItems: "start", flexDirection: "column", justifyContent: "center", gap: 15 }}>
                            <Text style={{ color: "#FDFDFD", fontSize: 16 }}>{deck.nome_deck}</Text>
                            <View style={{ width: "100%", height: 10 }}>
                                <View style={{ width: "100%", height: 10, backgroundColor: "#D9D9D9", borderRadius: 5, position: "absolute" }}></View>
                                <View style={{ width: `${tamanhoBarra}%`, height: 10, backgroundColor: "#00C05A", borderRadius: 5, zIndex: 2 }}></View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <View style={{width: "85%", height: "65%", backgroundColor: "#172430", borderRadius: 10, alignItems: 'center', justifyContent: "space-between",paddingVertical: "5%", paddingHorizontal: "5%"}}>
                        <Text style={{color: "#FDFDFD", fontSize: 16}}>{perguntaAtual.enunciado_pergunta}</Text>
                        <View style={{width: "100%", height: "80%"}}>
                            <FlatList 
                                data={perguntaAtual.alternativas}
                                renderItem={ ({ item }) => 
                                        <Alternativa
                                            Enunciado={item.enunciado_alternativa}
                                            SetAlternativaEscolhida={setAlternativaEscolhida} 
                                            CodigoAlternativa={item.codigo_alternativa}
                                            AlternativaEscolhida={alternativaEscolhida}
                                        />                     
                                    }
                                keyExtractor={(item) => item.codigo_alternativa}                                
                            />
                        </View>
                    </View>
                    <ButtonPadrao
                        textoBotao="Proximo"                        
                        Desativado={alternativaEscolhida == null ? true : false}
                        handlePress={prosseguirTeste}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}