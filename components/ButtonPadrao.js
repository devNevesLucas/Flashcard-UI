import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function ButtonPadrao(props) {

    const estiloBotao = props.ModoEscuro ? estilo.botao_escuro : estilo.botao_claro;
    const estiloTexto = props.ModoEscuro ? estilo.texto_botaoEscuro : estilo.texto_botaoClaro;
    const altura = props.Altura ? props.Altura : "10%";

    return (
        <TouchableOpacity style={[estilo.base_botao, {height: altura}]} onPress={props.handlePress}>
            <View style={[estilo.view_botao, estiloBotao, ]}>       
                <Text style={[estilo.botao, estiloTexto ]}>{props.textoBotao}</Text>
            </View>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    base_botao: {
        width: "80%"
    },
    view_botao: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    botao: {        
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 10
    },
    botao_escuro: {
        backgroundColor: "#4361EE",
        borderRadius: 10       
    },
    botao_claro: {
        backgroundColor: "#FDFDFD",
        borderRadius: 10
    },
    texto_botaoClaro: {
        color: "#021526",        
        fontWeight: "bold",
    },
    texto_botaoEscuro: {        
        color: "#FDFDFD",
        fontWeight: "bold"
    }
});
