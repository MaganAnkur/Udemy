import React, {useReducer} from 'react';


const Context = React.createContext();

export default createDataContext=(reducer,actions, initialState) => {
    
    const Provider =({children})=> {
        const [state,dispatch] = useReducer(reducer,initialState);

        const boundActions = {};
        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
        }

        return (<Context.Provider value = {{ data: state, ...boundActions}}> 
                {children}
             </Context.Provider>
        );
    };
    return {Context, Provider};
};
