import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function InputField(props) {
    return (
        <View>
            <Text>{props.Texto}</Text>
            <TextInput onChangeText={props.SetItem} secureTextEntry={props.Senha}/> 
        </View>
    );
}