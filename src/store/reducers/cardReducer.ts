import { stateTypes, ActionsTypes, cardActionType } from './../../types/cardTypes';

const initialState:stateTypes = {
    cards:[],
    loading:false,
    error:null
}



export const CardReducer = (state = initialState,actions:ActionsTypes):stateTypes => {
    switch(actions.type){
        case cardActionType.FETCH_CARD:
            return {cards:[],error:null,loading:true} 
        case cardActionType.FETCH_CARD_SUCCESS:
            return {cards:actions.payload,error:null,loading:false} 
        case cardActionType.FETCH_CARD_ERROR:
            return {cards:[],error:actions.payload,loading:false} 
        default:
            return state
    }
}