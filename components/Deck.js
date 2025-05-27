import { Text, TouchableOpacity, View } from "react-native";

export default function Deck (props) {

    return (
        <TouchableOpacity style={{width: "100%", height: 90, boderRadius: 20, marginBottom: 10, flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
            <View style={{width: "100%", borderTopStartRadius: 10, borderEndStartRadius: 10, backgroundColor: props.Deck.cor_deck, height: "15%"}}></View>
            <View style={{width: "100%", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: "#FDFDFD", height: "85%", justifyContent: "space-around", paddingHorizontal: 15, paddingVertical: 5}}>
                <Text style={{color: "#262626", fontSize: 16, marginBottom: "5%"}}>{props.Deck.nome_deck}</Text>
                <View style={{width: "100%", justifyContent: "space-between", flexDirection: "row"}}>
                    <Text style={{color: "#484848", fontSize: 15}}>{props.Deck.qtd_deck} cards</Text>
                    <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                        <Text style={{color: "#484848", fontSize: 15}}>para hoje: </Text>
                        <Text style={{color: "#021526", fontSize: 15}}>{props.Deck.meta_deck} cards</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

}