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

    const deck_tmp = {
        nome_deck: "Estrutura de dados",
        cor_deck: "#FF3B30",
        qtd_deck: 20,
        meta_deck: 12,
        criacao_deck: '15/04/2025',
        ultimo_estudo_deck: '19/04/2025',
        qtd_acertos_deck: 14
    }

    const perguntas = [
        {
            enunciado_pergunta: "Qual das estruturas de dados a seguir é baseada no princípio LIFO (Last In, First Out)?",
            alternativas: [
                { codigo_alternativa: 0, enunciado_alternativa: "Fila", correta: false },
                { codigo_alternativa: 1, enunciado_alternativa: "Árvore", correta: false },
                { codigo_alternativa: 2, enunciado_alternativa: "Lista Encadeada", correta: false },
                { codigo_alternativa: 3, enunciado_alternativa: "Pilha", correta: true },
                { codigo_alternativa: 4, enunciado_alternativa: "Hash Table", correta: false }
            ]
        },
        {
            enunciado_pergunta: "Qual estrutura de dados é mais adequada para implementar uma fila de impressão?",
            alternativas: [
                { codigo_alternativa: 0, enunciado_alternativa: "Árvore Binária", correta: false },
                { codigo_alternativa: 1, enunciado_alternativa: "Pilha", correta: false },
                { codigo_alternativa: 2, enunciado_alternativa: "Hash Table", correta: false },
                { codigo_alternativa: 3, enunciado_alternativa: "Lista Duplamente Encadeada", correta: false },
                { codigo_alternativa: 4, enunciado_alternativa: "Fila", correta: true }
            ]
        },
        {
            enunciado_pergunta: "O que é uma árvore binária de busca (BST)?",
            alternativas: [
                { codigo_alternativa: 0, enunciado_alternativa: "Uma árvore onde cada nó tem no máximo dois filhos e os valores são armazenados em ordem aleatória", correta: false },
                { codigo_alternativa: 1, enunciado_alternativa: "Uma árvore onde cada nó tem exatamente dois filhos", correta: false },
                { codigo_alternativa: 2, enunciado_alternativa: "Uma árvore onde para cada nó, o valor à esquerda é menor e o valor à direita é maior", correta: true },
                { codigo_alternativa: 3, enunciado_alternativa: "Uma árvore em que todos os nós têm o mesmo número de filhos", correta: false },
                { codigo_alternativa: 4, enunciado_alternativa: "Uma árvore onde os valores são duplicados em cada nível", correta: false }
            ]
        },
        {
            enunciado_pergunta: "Qual estrutura de dados é ideal para buscar dados em tempo constante, em média?",
            alternativas: [
                { codigo_alternativa: 0, enunciado_alternativa: "Árvore AVL", correta: false },
                { codigo_alternativa: 1, enunciado_alternativa: "Hash Table", correta: true },
                { codigo_alternativa: 2, enunciado_alternativa: "Pilha", correta: false },
                { codigo_alternativa: 3, enunciado_alternativa: "Fila", correta: false },
                { codigo_alternativa: 4, enunciado_alternativa: "Lista Encadeada", correta: false }
            ]
        },
        {
            enunciado_pergunta: "O que caracteriza uma lista duplamente encadeada?",
            alternativas: [
                { codigo_alternativa: 0, enunciado_alternativa: "Cada nó aponta apenas para o próximo", correta: false },
                { codigo_alternativa: 1, enunciado_alternativa: "Cada nó tem um valor único e fixo", correta: false },
                { codigo_alternativa: 2, enunciado_alternativa: "Cada nó aponta para o início e o fim da lista", correta: false },
                { codigo_alternativa: 3, enunciado_alternativa: "Cada nó aponta para o anterior e o próximo", correta: true },
                { codigo_alternativa: 4, enunciado_alternativa: "Cada nó possui um índice inteiro como chave", correta: false }
            ],
        }
    ];

    const [indexPerguntaAtual, setIndexPerguntaAtual] = useState(0);
    const [perguntaAtual, setPerguntaAtual] = useState(perguntas[indexPerguntaAtual]);
    const [pontuacao, setPontuacao] = useState(0);
    const [alternativaEscolhida, setAlternativaEscolhida] = useState(null);
    const [tamanhoBarra, setTamanhoBarra] = useState(100 / perguntas.length);

    const prosseguirTeste = () => {

        let indexAtual = indexPerguntaAtual + 1;
        if (perguntaAtual.alternativas[alternativaEscolhida].correta)
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
                        <View style={{ backgroundColor: deck_tmp.cor_deck, height: "100%", width: 15, borderStartStartRadius: 10, borderStartEndRadius: 10 }}></View>
                        <View style={{ display: "flex", width: "85%", alignItems: "start", flexDirection: "column", justifyContent: "center", gap: 15 }}>
                            <Text style={{ color: "#FDFDFD", fontSize: 16 }}>{deck_tmp.nome_deck}</Text>
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