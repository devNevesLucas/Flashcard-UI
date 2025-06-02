import { FlatList, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PerfilContainer from "../components/PerfilContainer";
import { useUser } from "../context/user/useUser";
import ButtonPadrao from "../components/ButtonPadrao";
import PerguntaItem from "../components/PerguntaItem";
import { useState } from "react";

export default function CardsPage(props) {

    const { user, setUser } = useUser();
    const [perguntas, setPerguntas] = useState([
        {
            enunciado_pergunta: "Qual das estruturas de dados a seguir é baseada no princípio LIFO (Last In, First Out)?",
            codigo_pergunta: 0,
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
            codigo_pergunta: 1,
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
            codigo_pergunta: 2,
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
            codigo_pergunta: 3,
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
            codigo_pergunta: 4,
            alternativas: [
                { codigo_alternativa: 0, enunciado_alternativa: "Cada nó aponta apenas para o próximo", correta: false },
                { codigo_alternativa: 1, enunciado_alternativa: "Cada nó tem um valor único e fixo", correta: false },
                { codigo_alternativa: 2, enunciado_alternativa: "Cada nó aponta para o início e o fim da lista", correta: false },
                { codigo_alternativa: 3, enunciado_alternativa: "Cada nó aponta para o anterior e o próximo", correta: true },
                { codigo_alternativa: 4, enunciado_alternativa: "Cada nó possui um índice inteiro como chave", correta: false }
            ],
        }
    ]);

    const atualizarEnunciadoPergunta = (codigoPergunta, conteudo) => {
        setPerguntas(perguntas =>
            perguntas.map(pergunta =>
                pergunta.codigo_pergunta == codigoPergunta ? {
                    ...pergunta, enunciado_pergunta: conteudo
                } : pergunta
            )
        )
    }

    const atualizarEnunciadoAlternativa = (codigoPergunta, codigoAlternativa, conteudo) => {
        setPerguntas(perguntas => 
            perguntas.map(pergunta => 
                pergunta.codigo_pergunta == codigoPergunta ? {
                    ...pergunta, alternativas: pergunta.alternativas.map(alternativa =>
                        alternativa.codigo_alternativa == codigoAlternativa ? {
                            ...alternativa, enunciado_alternativa: conteudo
                        } : alternativa
                    )
                } : pergunta
            )
        )
    }

    const atualizarAlternativaCorreta = (codigoPergunta, codigoAlternativa) => {
        setPerguntas(perguntas => 
            perguntas.map(pergunta => 
                pergunta.codigo_pergunta == codigoPergunta ? {
                    ...pergunta, alternativas: pergunta.alternativas.map(alternativa => 
                        alternativa.codigo_alternativa == codigoAlternativa ? {
                            ...alternativa, correta: true
                        } : {
                            ...alternativa, correta: false
                        }
                    )
                } : pergunta
            )
        )
    }

    const removerPergunta = (codigoPergunta) => {
        setPerguntas(perguntas =>
            perguntas.filter(pergunta => pergunta.codigo_pergunta != codigoPergunta)
        )
    }

    const removerAlternativa = (codigoPergunta, codigoAlternativa) => {
        setPerguntas(perguntas =>
            perguntas.map(pergunta => 
                pergunta.codigo_pergunta == codigoPergunta ? {
                    ...pergunta,
                    alternativas: pergunta.alternativas.filter(alternativa => 
                        alternativa.codigo_alternativa != codigoAlternativa
                    )
                } : pergunta
            )
        )
    }

    return (
        <SafeAreaView style={{backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require("../assets/fundo_cards.png")}
                style={{width:'100%', height: '100%', display: 'flex', alignItems: 'center'}}  
                blurRadius={2}
                resizeMode="cover"
            >
                <PerfilContainer User={user} Navigation={props.navigation} />

                <View style={{width: '90%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginVertical: "5%"}}>
                    <View style={{width: "100%", height: "70%", alignItems: "start", justifyContent: "center", gap: 10}}>
                        <Text style={{fontSize: 20, color: "#FDFDFD"}}>Estrutura de dados - cards</Text>
                        <View style={{width: "100%", height: "95%", backgroundColor: "#172430", borderRadius: 10, justifyContent: "center", alignItems: "center"}}>
                            <FlatList
                                data={perguntas}
                                renderItem= {
                                    ({ item }) => <PerguntaItem 
                                        Pergunta={item} 
                                        SetEnunciadoPergunta={atualizarEnunciadoPergunta}
                                        SetEnunciadoAlternativa={atualizarEnunciadoAlternativa}
                                        SetAlternativaCorreta={atualizarAlternativaCorreta}
                                        RemoverPergunta={removerPergunta}
                                        RemoverAlternativa={removerAlternativa}
                                    />
                                    }
                                keyExtractor={(item) => item.codigo_pergunta}
                                style={{width: "90%"}}
                                contentContainerStyle={{justifyContent: "center"}}
                            />
                        </View>
                    </View>

                    <ButtonPadrao 
                        textoBotao="Salvar"

                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}