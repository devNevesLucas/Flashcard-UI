import { useState } from "react";
import { useUser } from './context/user/useUser';
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from './navigator/MainNav';  
import AuthNavigator from "./navigator/AuthNav";

// Eu não queria que isso existisse, eu acho feio e esquisito, não deveria 
// mas não tenho como pensar sobre isso agora... É isso então
export default function RootContainer() {

    const { user, setUser } = useUser();

    return (
        <NavigationContainer style={{backgroundColor: "#4361EE"}}>
            {user ? <MainNavigator /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}