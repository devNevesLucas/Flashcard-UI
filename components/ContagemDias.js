import { View, FlatList, Text } from "react-native";

export default function ContagemDias (props) {

    const dias = [
        { dia: 'Seg', id: 0 }, 
        { dia: 'Ter', id: 1 },
        { dia: 'Qua', id: 2 },
        { dia: 'Qui', id: 3 },
        { dia: 'Sex', id: 4 },
        { dia: 'Sab', id: 5 },
        { dia: 'Dom', id: 6 } 
    ]

    const DiaRenderizado = ({item}) => {
        return (
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 6, marginRight: 6}}>
                <View style={{width: 30, aspectRatio: 1 / 1, backgroundColor: "#D9D9D9", borderRadius: 50}}></View>
                <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 16}}>{item.dia}</Text>
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
            />
            <Text style={{color: "#4361EE", fontWeight: "bold", fontSize: 20}}>20 dias de estudo!</Text>
            <Text style={{color: "#FDFDFD", fontWeight: "bold", fontSize: 20}}>Melhore!</Text>
        </View>
    )

}