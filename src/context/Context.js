import React, {createContext, useContext, useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA_LIST':
      return {
        ...state,
        data_list: action.payload,
      };

    default:
      return state;
  }
};

export const AppContext = createContext({});
export const AppProvider = ({children}) => {
  const initialState = {
    data_list: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,

        setDataList: data_list =>
          dispatch({type: 'DATA_LIST', payload: data_list}),
      }}>
      {children}
    </AppContext.Provider>
  );
};
