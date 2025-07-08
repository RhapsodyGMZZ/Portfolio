/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { createContext, useReducer } from "react";
import { jsonFile } from "./lib/definitions";

type AppState = {
    json_file: jsonFile
}

const defaultState: AppState = {
    json_file: []
} 


const actions = {
    setJSONFile: "SET_JSON_FILE"
};

const reducer = (state:any, action:any) => {
    switch (action.type) {
        case actions.setJSONFile:   
            return {...state, json_file: action.payload}
    }
}


export const Context = createContext<{
    state: AppState;
    setJSONFile: (val: string) => void;
}>({
    state: defaultState,
    setJSONFile: (_val: string) => {},
});


export const ContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    /**
     * Used to have a code more scalable, cleaner and readable
     */
    const [state, dispatch] = useReducer(reducer, defaultState);

    /**
     *
     * @param val - Boolean here, but more generally this is the value passed in
     * the `setState() buut here it's used with `dispatch` from useReducer()
     */
    const setJSONFile = (val: string) => {
        dispatch({ type: actions.setJSONFile, payload: val });
    };
    return (
        <Context.Provider
            value={{
                state,
                setJSONFile,
            }}
        >
            {children}
        </Context.Provider>
    );
};