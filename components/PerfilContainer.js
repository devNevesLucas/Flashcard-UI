import { View, Text } from "react-native";
import  AntDesign from '@expo/vector-icons/AntDesign'

export default function PerfilContainer(props) {

    const widthBase =  props.Navigation ? "80%" : "100%";

    const handleVoltar = () => {
        props.Navigation.goBack();
    }

    return (
        <View style={{width: '85%', flexDirection: "row", alignItems: "center", gap: 10}}>
            { props.Navigation && <AntDesign onPress={handleVoltar} name="leftcircle" size={48} color="#172430"/> }
            <View style={{display: "flex", flexDirection: "row", width: widthBase, backgroundColor: "#172430", padding: "2%", borderRadius: 10, alignItems: "center", gap: 10}}>
                <View style={{backgroundColor: "#D9D9D9", width: 50, aspectRatio: 1 / 1, borderRadius: 50}}></View>
                <View style={{display: "flex", alignItems: "start", flexDirection: "column"}}>
                    <Text style={{color:"#FDFDFD", fontWeight: "bold"}}>{props.User.nome_usuario}</Text>
                    <Text style={{color: "#FDFDFD"}}>lvl. {props.User.nivel_usuario}</Text>
                </View>
            </View>        
        </View>
    )

}