import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const [userName, setUserName] = useState('');
    return (
        <DataContext.Provider value={[ userName, setUserName ]}>
        {children}
        </DataContext.Provider>
    )

}

export default DataProvider;