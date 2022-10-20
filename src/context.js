import { createContext, useContext, useReducer, useState } from "react";

const newContext = createContext();

const ContextProvider = ({children}) => {
    
    const dispatchHandler = (state,{type,payload}) => {
        switch(type){
            case "GET_PRODUCTS":
                return {...state,productList:payload};
            case "GET_USER":
                return {...state,user:payload}
            
            default:
                return state ;
        }
    }
    
    const [contextData, setContextData] = useReducer(dispatchHandler,{
        productList:[],
        user:{},
    })
    return(
        <newContext.Provider value={{contextData, setContextData}}>
            {children}
        </newContext.Provider>
    )
};

const useDataContext = () => useContext(newContext);

export {useDataContext,ContextProvider};