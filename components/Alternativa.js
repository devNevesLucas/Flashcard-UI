import { Pressable, View, Text } from "react-native";

// Acho que essa bomba ficou com muito props... kkkkk
export default function Alternativa (props) {

    const handlePress = () => {
        if (props.SetAlternativaEscolhida)
            props.SetAlternativaEscolhida(props.CodigoAlternativa)
    }

    // Faço isso pra poder mudar o fundo caso a alternativa seja escolhida
    let fundoAlternativa = 
        (props.CodigoAlternativa == props.AlternativaEscolhida) ? 
        "#4361EE" : "#042959"

    return (
        <Pressable style={[{backgroundColor: fundoAlternativa}, {width: "100%", paddingVertical: "5%", paddingHorizontal: 10, marginVertical: "3%", borderRadius: 10}]} onPress={handlePress}>
            <Text style={{color: "#FDFDFD", fontSize: 16}}>{props.Enunciado}</Text>
        </Pressable>
    )
}