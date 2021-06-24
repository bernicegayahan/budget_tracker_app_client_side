import React from 'react'; 

const UserContext = React.createContext()

// context provider component allows context t change subscriptions of child components. 
export const UserProvider = UserContext.Provider

//export the context component as default object to be exported.
export default UserContext; 