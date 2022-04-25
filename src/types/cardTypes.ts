export interface stateTypes{
    cards:any[];
    loading:boolean,
    error:null | string
}
export enum cardActionType{
    FETCH_CARD = 'FETCH_CARD',
    FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS',
    FETCH_CARD_ERROR = 'FETCH_CARD_ERROR'
}

interface IFetchUsers {
    type:cardActionType.FETCH_CARD
}

interface IFetchUsersSuccess{
    type:cardActionType.FETCH_CARD_SUCCESS,
    payload:any[]
}

interface IFetchUsersError{
    type: cardActionType.FETCH_CARD_ERROR,
    payload:string
}

export type ActionsTypes =  IFetchUsers | IFetchUsersSuccess | IFetchUsersError
