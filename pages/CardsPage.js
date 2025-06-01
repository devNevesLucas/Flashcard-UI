import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PerfilContainer from "../components/PerfilContainer";
import { useUser } from "../context/user/useUser";
import ButtonPadrao from "../components/ButtonPadrao";

export default function CardsPage(props) {

    const { user, setUser } = useUser();

    return (
        <SafeAreaView style={{backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require("../assets/fundo_cards.png")}
                style={{width:'100%', height: '100%', display: 'flex', alignItems: 'center'}}  
                blurRadius={2}
                resizeMode="cover"
            >
                <PerfilContainer User={user} Navigation={props.navigation} />

                <View style={{width: '85%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginVertical: "5%"}}>
                    <View style={{width: "100%", height: "70%", alignItems: "start", justifyContent: "center", gap: 10}}>
                        <Text style={{fontSize: 20, color: "#FDFDFD"}}>Estrutura de dados - cards</Text>
                        <View style={{width: "100%", height: "95%", backgroundColor: "#172430", borderRadius: 10}}>

                        </View>
                    </View>

                    <ButtonPadrao 
                        textoBotao="Salvar"

                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}