import { useSelectorTS } from './useSelectorTS';
import React from 'react'

import { ItoDo } from './../redux/types/types';



export default function useAlltoDolength(todo:ItoDo[]) {
 
       const currentID= useSelectorTS(state=>state.list.currentTodoid)

       const changeParams=todo.reduce((aggr:number,val:ItoDo)=>aggr+val.todos.length,0)
 
         const findLength=React.useMemo(()=>{
                 return todo.reduce((aggr:number,val:ItoDo)=>aggr+val.todos.length,0)
         },[currentID, changeParams])
          
         
          
       const result= React.useMemo(()=>{ 

    return   todo.reduce((aggr:number,el:ItoDo)=>aggr+el.todos.length,0)



        },[findLength])
        

 
         return result
      
}
