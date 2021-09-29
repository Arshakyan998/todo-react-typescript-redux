import {actionTypes,actionsType,ItoDos,ItoDo,catParams} from '../types/types'

export const initalAction=():actionsType=>({
type:actionTypes.INITAL_ACTION
})

export const serchCurrentCategory=(val:number|null):actionsType=>({
        type:actionTypes.SERCH_RESULT,
        payload:val
})

export  const adddNewToDo=(val:ItoDos):actionsType=>({
        type:actionTypes.ADD_NEW_TODO,
        payload:val


})

export const changeComplated=(val:number):actionsType=>({
        type:actionTypes.CHANGE_COMPLETED,
        payload:val
})

export const remmoveToDoItem=(val:number):actionsType=>({
        type:actionTypes.REMOVE_TODO,
        payload:val
         
})

export const createNewCategory=(val:ItoDo):actionsType=>({
        type:actionTypes.CREATE_NEW_CAT,
        payload:val
})

export const removeCat=(val:number):actionsType=>({
        type:actionTypes.REMOVE_CAT,
        payload:val

})

export const changeCatParams=(val:catParams):actionsType=>({
type:actionTypes.CHANGE_CAT_PARAMS,
payload:val
})