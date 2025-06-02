import { useState } from "react";
import { Pressable, View, Text, TouchableOpacity, TextInput } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { FlatList } from "react-native";
import AlternativaItem from "./AlternativaItem";

export default function PerguntaItem(props) {

    const [expandido, setExpandido] = useState(false);
    const [modoEdicao, setModoEdicao] = useState(false);

    let icon = expandido ? "chevron-down"  : "chevron-left";    
    let corFundoIconEdicao = modoEdicao ? "#308AFF" : "#0059CC";

    const atualizarEnunciado = (texto) => {
        props.SetEnunciadoPergunta(props.Pergunta.codigo_pergunta, texto);
    }

    const atualizarEnunciadoAlternativa = (codigoAlternativa, texto) => {
        props.SetEnunciadoAlternativa(props.Pergunta.codigo_pergunta, codigoAlternativa, texto);
    }

    const atualizarAlternativaCorreta = (codigoAlternativa) => {
        props.SetAlternativaCorreta(props.Pergunta.codigo_pergunta, codigoAlternativa);
    }

    const removerPergunta = () => {
        props.RemoverPergunta(props.Pergunta.codigo_pergunta);
    }

    const removerAlternativa = (codigoAlternativa) => {
        props.RemoverAlternativa(props.Pergunta.codigo_pergunta, codigoAlternativa)
    }

    const adicionarAlternativa = () => {
        props.AdicionarAlternativa(props.Pergunta.codigo_pergunta);
    }

    return (
        <View style={{width: "100%", backgroundColor: "#042959", marginVertical: 10, borderRadius: 5}}>            
            <Pressable onPress={ () => { setExpandido(!expandido) }} style={{alignItems: "center", justifyContent: "space-around", flexDirection: "row", width: "90%", gap: 10, padding: 15}}>
                <FontAwesome name={icon} size={36} color="#FDFDFD" />
                <TextInput 
                    style={{fontSize: 16, color: "#FDFDFD", flex: 1}}
                    value={props.Pergunta.enunciado_pergunta}
                    onChangeText={texto => atualizarEnunciado(texto)}
                    multiline={true}
                    editable={modoEdicao}
                />                
            </Pressable>
        
            { expandido && <View style={{width: "100%", alignItems: "center", justifyContent: "center"}}>
                <FlatList 
                    data={props.Pergunta.alternativas}
                    renderItem={ ({item}) => 
                        <AlternativaItem 
                            Alternativa={item}
                            CodigoPergunta={props.Pergunta.codigo_pergunta}
                            SetEnunciadoAlternativa={atualizarEnunciadoAlternativa}
                            SetAlternativaCorreta={atualizarAlternativaCorreta}
                            RemoverAlternativa={removerAlternativa}
                        />
                    }
                    keyExtractor={(item) => item.codigo_alternativa}
                    contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
                    style={{width: "100%", marginVertical: 15}}
                    ListFooterComponent={() => (
                        <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
                            <TouchableOpacity onPress={adicionarAlternativa} style={{backgroundColor: "#4361EE", padding: 10, width: "60%", borderRadius: 5, alignItems: "center", justifyContent: "center", marginTop: 10}}>
                                <Text style={{fontsize: 12, color: "#FDFDFD"}}>+ Adicionar alternativa</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View> }
            { !expandido && <View style={{width: "100%", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                <TouchableOpacity onPress={() => setModoEdicao(!modoEdicao) } style={{backgroundColor: corFundoIconEdicao, alignItems: "center", justifyContent: "center", flex: 1, paddingVertical: 5, borderBottomLeftRadius: 5}}>
                    <FontAwesome name="edit" size={36} color="#FDFDFD" />
                </TouchableOpacity>
                <TouchableOpacity onPress={removerPergunta} style={{backgroundColor: "#E63D3D", alignItems: "center", justifyContent: "center", flex: 1, paddingVertical: 5, borderBottomRightRadius: 5}}>
                    <FontAwesome name="trash" size={36} color="#FDFDFD" />
                </TouchableOpacity>
            </View> }
        </View>
    )

}