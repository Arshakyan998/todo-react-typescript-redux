
export interface ItoDos{
        toDoId:number,
         text:string,
          isCompleted:boolean   
}

export interface catParams{
  name:string,
  color:string, 
  id:number,
}

export interface ItoDo extends catParams {
       
                       
                        
                        todos:ItoDos[]
                        
        
}


export interface IinitalState{
        todo:ItoDo[],
        currentTodoid:null|number
}

export enum actionTypes{
        INITAL_ACTION='INITAL_ACTION',
        SERCH_RESULT='SERCH_RESULT',
        ADD_NEW_TODO="ADD_NEW_TODO",
        CHANGE_COMPLETED="CHNAGE_COMPLATED",
        REMOVE_TODO='REMOVE_TODO',
        CREATE_NEW_CAT="CREATE_NEW_CAT",
        REMOVE_CAT='REMOVE_CAT',
        CHANGE_CAT_PARAMS='CHANGE_CAT_PARAMS'
}

interface initalAction{
        type:actionTypes.INITAL_ACTION
}


interface serchCurrentResult{
type:actionTypes.SERCH_RESULT,
payload:number | null
}

interface adddNewToDo{
        type:actionTypes.ADD_NEW_TODO,
        payload:ItoDos
}

interface changeComplated{
        type:actionTypes.CHANGE_COMPLETED,
        payload:number
        
}

interface removeTodo{
        type:actionTypes.REMOVE_TODO,
        payload:number
        
}

interface createNewCat{
        type:actionTypes.CREATE_NEW_CAT,
        payload:ItoDo
}

interface removeCat{
        type:actionTypes.REMOVE_CAT,
        payload:number
}

interface changeCatParams{
        type:actionTypes.CHANGE_CAT_PARAMS,
        payload:catParams
}



export type actionsType=
initalAction       | 
serchCurrentResult |
adddNewToDo        | 
changeComplated    |
removeTodo         |
createNewCat       |
removeCat          |
changeCatParams