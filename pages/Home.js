import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomePage() {

    return (
        <SafeAreaView style={{flex: 1, height: '100%', width: '100%', flexDirection: 'column'}}>
            <Text>
                PLACEHOLDER DO PERFIL
            </Text>
            <Text>
                PLACEHOLDER DA CONTAGEM DOS DIAS
            </Text>
            <Button            
                title="Estudar sozinho"
            />
            <Button
                title="Estudar em grupo"
            />
    
        </SafeAreaView>
    )

}