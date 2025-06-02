import { FlatList, ImageBackground, Text, View, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PerfilContainer from "../components/PerfilContainer";
import { useUser } from "../context/user/useUser";
import ButtonPadrao from "../components/ButtonPadrao";
import PerguntaItem from "../components/PerguntaItem";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardsPage(props) {

    const { user, setUser } = useUser();

    const [qtdPerguntasAdicionadas, setQtdPerguntasAdicionadas] = useState(0);
    const [qtdAlternativasAdicionadas, setQtdAlternativasAdicionadas] = useState(0);

    const [perguntasRemovidas, setPerguntasRemovidas] = useState([]);
    const [alternativasRemovidas, setAlternativasRemovidas] = useState([]);
    
    const [perguntas, setPerguntas] = useState([]);

    const atualizarEnunciadoPergunta = (codigoPergunta, conteudo) => {
        setPerguntas(perguntas =>
            perguntas.map(pergunta =>
                pergunta.codigo_pergunta == codigoPergunta ? {
                    ...pergunta, enunciado_pergunta: conteudo, editado: true
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
                            ...alternativa, enunciado_alternativa: conteudo, editado: true
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
                            ...alternativa, correta: true, editado: true
                        } : {
                            ...alternativa, correta: false, editado: true
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

        if (typeof codigoPergunta == "number")
            setPerguntasRemovidas([...perguntasRemovidas, codigoPergunta]);
    }

    const removerAlternativa = (codigoPergunta, codigoAlternativa) => {
        setPerguntas(perguntas =>
            perguntas.map(pergunta => 
                pergunta.codigo_pergunta == codigoPergunta ? {
                    ...pergunta,
                    alternativas: pergunta.alternativas.filter(alternativa => 
                        alternativa.codigo_alternativa != codigoAlternativa
                    ), 
                    editado: true
                } : pergunta
            )
        )

        if (typeof codigoAlternativa == "number")
            setAlternativasRemovidas([...alternativasRemovidas, codigoAlternativa]);
    }

    const inserirPergunta = () => {
        setPerguntas([...perguntas, { 
                enunciado_pergunta: "", 
                codigo_pergunta: `pergunta_nao_salva${qtdPerguntasAdicionadas}`, 
                alternativas: [], 
                recem_criado: true
            }])
        setQtdPerguntasAdicionadas(qtdPerguntasAdicionadas + 1);
    }

    const inserirAlternativa = (codigoPergunta) => {

        setPerguntas(perguntas => 
            perguntas.map(pergunta => 
                pergunta.codigo_pergunta == codigoPergunta ? {
                    ...pergunta,
                    alternativas: [
                            ...pergunta.alternativas,
                            {
                                codigo_alternativa: `alternativa_nao_salva${qtdAlternativasAdicionadas}`, 
                                enunciado_alternativa: "", 
                                correta: false,
                                recem_criado: true
                            }
                        ]
                } : pergunta
            )
        );            

        setQtdAlternativasAdicionadas(qtdAlternativasAdicionadas + 1);
    }

    const salvarEstado = async () => {

        let perguntasAlteradas = perguntas.filter(pergunta => (pergunta.editado || pergunta.recem_criado) && pergunta.enunciado_pergunta.trim() != "");
        let perguntasFiltradas = perguntasAlteradas.map(pergunta => (
            { 
                ...pergunta, 
                alternativas: pergunta.alternativas.filter(alternativa => 
                        alternativa.editado && alternativa.enunciado_alternativa != ""
                    ) 
            }
        ))

        let perguntasCriadas = perguntasAlteradas.filter(pergunta => pergunta.recem_criado);        

        let objetoEnviado = {
            perguntas_alteradas: perguntasFiltradas
        }

        console.log(objetoEnviado)

        if (perguntasFiltradas.length == 0) return;

        const token = await AsyncStorage.getItem('token');        

        const url = `${process.env.EXPO_PUBLIC_BACKEND}/pergunta/atualizar`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(objetoEnviado)
        });

        const resultado = await response.json();
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
                                        AdicionarAlternativa={inserirAlternativa}
                                    />
                                    }
                                keyExtractor={(item) => item.codigo_pergunta}
                                style={{width: "90%"}}
                                contentContainerStyle={{justifyContent: "center"}}

                                ListFooterComponent={() => (
                                    <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
                                        <TouchableOpacity onPress={inserirPergunta} style={{backgroundColor: "#4361EE", padding: 10, width: "60%", borderRadius: 5, alignItems: "center", justifyContent: "center", marginTop: 10}}>
                                            <Text style={{fontsize: 12, color: "#FDFDFD"}}>+ Adicionar pergunta</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />                            
                        </View>
                    </View>
                    <ButtonPadrao 
                        textoBotao="Salvar"
                        handlePress={salvarEstado}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}