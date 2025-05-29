import { View, FlatList, Text, StyleSheet } from "react-native";

export default function ContagemDias (props) {

    const dias = [
        { dia: 'Dom', id: 0 }, 
        { dia: 'Seg', id: 1 }, 
        { dia: 'Ter', id: 2 },
        { dia: 'Qua', id: 3 },
        { dia: 'Qui', id: 4 },
        { dia: 'Sex', id: 5 },
        { dia: 'Sab', id: 6 },
    ]

    let contadorDias = -1;
    
    if (props.User.contagem_dias_log > 0) {

        const dia = props.User.ultimo_login;

        contadorDias = dia.getDay();
    }

    const DiaRenderizado = ({item}) => {

        const cor = contadorDias >= item.id ? "#4361EE" : "#D9D9D9";

        return (
            <View style={estilo.baseDiaRenderizado}>
                <View style={[estilo.circuloDiaRengerizado, {backgroundColor: cor}]}></View>
                <Text style={[estilo.textoDiaRenderizado, {color: cor}]}>{item.dia}</Text>
            </View>
        )
    }

    return (
        <View style={estilo.baseFlatList}>
            <FlatList
                data={dias}
                renderItem={DiaRenderizado}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={estilo.textoContagem}>20 dias de estudo!</Text>
            <Text style={estilo.fraseContagem}>Melhore!</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    baseDiaRenderizado: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        marginLeft: 6, 
        marginRight: 6
    },
    circuloDiaRengerizado: {
        width: 30, 
        aspectRatio: 1 / 1, 
        borderRadius: 50
    },
    textoDiaRenderizado: {
        fontWeight: "bold", 
        fontSize: 16
    },
    baseFlatList: {
        display:'flex', 
        flexDirection:'column',
        alignItems: 'center', 
        justifyContent: 'center',
        width: "85%",
        height: '25%',
        backgroundColor: "#172430",
        padding: 20,
        borderRadius: 10
    },
    textoContagem: {
        color: "#4361EE", 
        fontWeight: "bold", 
        fontSize: 20
    },
    fraseContagem: {
        color: "#FDFDFD", 
        fontWeight: "bold", 
        fontSize: 20
    }
})