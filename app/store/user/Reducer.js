import * as types from './ActionTypes'
import {REHYDRATE} from 'redux-persist';


const initialState = {
    localContacts: [],
    user: null,
    isRegistered: false,
    firebaseContacts: null,
    errorLoadingContacts: false,
    currentChatUser: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LOCAL_CONTACTS_IN_STORE:
            return {...state, localContacts: action.contacts}
        case types.SAVE_USER_INFO_IN_STORE:
            return {...state, user: action.userInformation, isRegistered: true}
        case types.LOAD_CONTACTS_FROM_FIREBASE_SUCCESS:
            return {...state, firebaseContacts: action.contacts}
        case types.LOAD_CONTACTS_FROM_FIREBASE_FAILED:
            return {...state, errorLoadingContacts: true}
        case types.SAVE_CURRENT_CHAT_CONTACT:
            return {...state, currentChatUser: action.contact}
        case types.REMOVE_CURRENT_CHAT_CONTACT:
            return {...state, currentChatUser: null}
        case REHYDRATE:
            return {
                ...state,
                localContacts: action.payload.localContacts,
                isRegistered: action.payload.isRegistered,
                user: action.payload.user
            }
        default:
            return state
    }
}

export default user