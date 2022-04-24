import React from "react";

export const BaseContext = React.createContext({
    initialVal: 15
});

const ContextProvider = (props) => {
    return (
        <BaseContext.Provider value={{ initialVal: 16 }}>
            {props.children}
        </BaseContext.Provider>
    );
};

export default ContextProvider;