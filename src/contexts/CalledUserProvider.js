import React, { useContext, createContext, useReducer } from 'react';
import { useUserContext } from './UserProvider';
// import {useUserContext} from './'

const calledUserContext = createContext();

export const CalledUserProvider = ({ children }) => {
  const { userInfo } = useUserContext();

  const INITIAL_STATE = {
    chatId: 'null',
    userCalled: {},
  };
  const chatReducer = (state, action) => {
    if (action.type == 'CHANGE_USER') {
      return {
        userCalled: action.payload,
        chatId:
          userInfo.uid > action.payload.uid
            ? userInfo.uid + action.payload.uid
            : action.payload.uid + userInfo.uid,
      };
    }
    return state;
  };
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <calledUserContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </calledUserContext.Provider>
  );
};

export const useUserCalledContext = () => {
  return useContext(calledUserContext);
};
