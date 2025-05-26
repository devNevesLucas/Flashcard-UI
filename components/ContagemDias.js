import { View, FlatList, Text } from "react-native";

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
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 6, marginRight: 6}}>
                <View style={{width: 30, aspectRatio: 1 / 1, backgroundColor: cor, borderRadius: 50}}></View>
                <Text style={{color: cor, fontWeight: "bold", fontSize: 16}}>{item.dia}</Text>
            </View>
        )
    }

    return (
        <View style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', width: "85%", height: '25%', backgroundColor: "#172430", padding: 20, borderRadius: 10}}>
            <FlatList
                data={dias}
                renderItem={DiaRenderizado}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={{color: "#4361EE", fontWeight: "bold", fontSize: 20}}>20 dias de estudo!</Text>
            <Text style={{color: "#FDFDFD", fontWeight: "bold", fontSize: 20}}>Melhore!</Text>
        </View>
    )

}