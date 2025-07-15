import React from "react";
import UserContext from "./UserContext";


// ek method hai....
// children ---> jo bhi aapke pass aa rha h usko as it is pass kr do....
const UserContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null)
    return(
        <UserContextProvider value={{user,setUser}}>
        {children}
        </UserContextProvider>
    )
}


export default UserContextProvider