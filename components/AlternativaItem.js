import { Pressable, View, Text, TouchableOpacity, TextInput } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useState } from "react";

export default function AlternativaItem(props) {

    let corBtnCorreta = props.Alternativa.correta ? "#14AE5C" : "#484848"

    const [modoEdicao, setModoEdicao] = useState(false);

    let corFundoIconEdicao = modoEdicao ? "#308AFF" : "#0059CC";

    const atualizarEnunciado = (texto) => {
        props.SetEnunciadoAlternativa(props.Alternativa.codigo_alternativa, texto)
    }

    const atualizarAlternativaCorreta = () => {
        props.SetAlternativaCorreta(props.Alternativa.codigo_alternativa);
    }

    const removerAlternativa = () => {
        props.RemoverAlternativa(props.Alternativa.codigo_alternativa);
    }

    return (
        <View style={{width: "100%", backgroundColor: "#02224C", marginVertical: 5, paddingVertical: 10, paddingHorizontal: 10, gap: 10, borderRadius: 10}}>
            <TextInput 
                style={{color: "#FDFDFD", fontSize: 16, paddingLeft: 10, borderLeftColor: "#FDFDFD", borderLeftWidth: 2}}
                value={props.Alternativa.enunciado_alternativa}
                onChangeText={texto => atualizarEnunciado(texto)}
                multiline={true}
                editable={modoEdicao}
            />
            <View style={{width: "100%", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                <TouchableOpacity onPress={atualizarAlternativaCorreta} style={{backgroundColor: corBtnCorreta, flex: 1, alignItems: "center", paddingVertical: 5, justifyContent: "center"}}>
                    <FontAwesome name="check" size={36} color={"#FDFDFD"}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setModoEdicao(!modoEdicao)} } style={{backgroundColor: corFundoIconEdicao, flex: 1, alignItems: "center", paddingVertical: 5, justifyContent: "center"}}>
                    <FontAwesome name="edit" size={36} color={"#FDFDFD"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={removerAlternativa} style={{backgroundColor: "#E63D3D", flex: 1, alignItems: "center", paddingVertical: 5, justifyContent: "center"}}>
                    <FontAwesome name="trash" size={36} color={"#FDFDFD"} />
                </TouchableOpacity>
            </View>
        </View>
    )    
}