import { useEffect, useState } from "react"
import UserContext from "./UserContext";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [carregando, setCarregando] = useState(true);

    return (
        <UserContext.Provider value={{ user, setUser, carregando }}>
            {children}
        </UserContext.Provider>
    );
}