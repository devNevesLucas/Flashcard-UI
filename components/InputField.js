import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function InputField(props) {
    return (
        <View style={estiloInput.baseField}>
            <Text style={estiloInput.texto}>{props.Texto}</Text>
            <TextInput style={estiloInput.inputTexto} onChangeText={props.SetItem} secureTextEntry={props.Senha}/> 
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
    inputTexto: {
        fontSize: 16,
        fontFamily: "poppins",
        borderRadius: 4,
        marginTop: 6,
        backgroundColor: "#0B131A",
        color: "#FDFDFD",
        shadowColor: "#000000",
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.25,
        shadow: 4
    }
})