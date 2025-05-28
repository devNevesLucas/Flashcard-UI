import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function InputField(props) {

    const estiloTexto = props.TemaEscuro ? estiloInput.textoClaro : estiloInput.textoEscuro; 
    const estiloBase = props.TemaEscuro ? estiloInput.inputEscuro : estiloInput.inputClaro;

    return (
        <View style={estiloInput.baseField}>
            <Text style={[estiloInput.texto, estiloTexto]}>{props.Texto}</Text>
            <TextInput style={[estiloInput.inputTexto, estiloBase]} onChangeText={props.SetItem} secureTextEntry={props.Senha}/> 
        </View>
    );
}

const estiloInput = StyleSheet.create({
    baseField: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        marginTop: 10,
        marginBottom: 5
    },
    texto: {
        fontSize: 16,
        fontFamily: "poppins",
        color: "#FDFDFD"
    },
    textoClaro: {
        color: "#FDFDFD"
    },
    textoEscuro: {
        color: "#282828"
    },
    inputTexto: {
        fontSize: 16,
        fontFamily: "poppins",
        borderRadius: 4,
        marginTop: 6,
        shadowColor: "#000000",
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.25,
        shadow: 4,
        borderColor: "#282828",
        borderWidth: 2
    },
    inputClaro: {
        backgroundColor: "#FDFDFD",
        color: "#282828",
        borderColor: "#343434"   
    },
    inputEscuro: {
        backgroundColor: "#0B131A",
        color: "#FDFDFD",
    }
})