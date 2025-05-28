import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PerfilContainer from "../components/PerfilContainer";
import { useUser } from "../context/user/useUser";
import ButtonPadrao from '../components/ButtonPadrao'
import InputField from '../components/InputField'

export default function NewDeck(props) {

    const { user, setUser } = useUser();

    return (
        <SafeAreaView style={{backgroundColor: "#5F79F0", flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
                source={require('../assets/fundo_new_deck.png')}
                style={{width:'100%', height: '100%', display: 'flex', alignItems: 'center'}}  
                blurRadius={2}
                resizeMode="cover"
            >
            
                <PerfilContainer User={user} Navigation={props.navigation}/>

                <View style={{width: '85%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                    <View style={{flexDirection: "column", width: "100%", height: "50%"}}>
                        <View style={{width: "100%", height: "20%", borderStartStartRadius: 15, borderEndStartRadius: 15, backgroundColor: "#14AE5C"}}></View>
                        <View style={{width: "100%", height: "80%",  borderStartEndRadius: 15, borderEndEndRadius: 15, backgroundColor: "#FDFDFD", alignItems: "center"}}>
                            <View style={{width: "80%"}}>
                                <InputField Texto="Nome do deck" />
                            </View>

                        </View>
                    </View>
                
                    <ButtonPadrao textoBotao="Criar deck" />
                
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}