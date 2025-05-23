import { View, Text } from "react-native";

export default function PerfilContainer(props) {

    return (
        <View style={{display: "flex", flexDirection: "row", width: "85%", backgroundColor: "#172430", padding: "2%", borderRadius: 10}}>
            <View style={{backgroundColor: "#D9D9D9", width: 50, aspectRatio: 1 / 1, borderRadius: 50}}></View>
            <View style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <Text style={{color:"#FDFDFD"}}>{props.User.nome}</Text>
                <Text style={{color: "#FDFDFD"}}>lvl. {props.User.nivel}</Text>
            </View>
        </View>        
    )

}