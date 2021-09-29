import React, { ReactElement } from "react";
import useAlltoDolength from "../userHooks/useAlltoDolength";

import { useDispatchTS } from "../userHooks/useDispatchTS";
import { useSelectorTS } from "../userHooks/useSelectorTS";
import { AddNewCat } from "./AddNewCat";

import s from './main.module.scss'



interface changeParams{
  color:string,
  name:string
}

const DrowSideBar: React.FC = (): ReactElement => {
  const closeAddBloc = React.useRef(null);
  const chnageStateShowBlock = React.useRef(null);

  const [showAddBlock, setShowAddBlock] = React.useState<boolean>(false);

  const [currentCat,setCurrentCat]=React.useState<number>()

  const { serchCurrentCategory, removeCat,changeCatParams } = useDispatchTS();

  const [currentName, setCurrentName] = React.useState<string>("all");

  const [showChangeBlock,setShowChangeBlock]=React.useState<boolean>(false)

  const [changeParams,setChangeParams]=React.useState<changeParams>({
    color:"",
    name:""
  })

  const todo= useSelectorTS((state) => state.list.todo);

  const todoLength=useAlltoDolength(todo)

  const chnageCurrentCat = ( name: string,id: number | null): void => {
     serchCurrentCategory(id);
    setCurrentName(name);
  };

  const changeShowAddBlock: React.MouseEventHandler<HTMLDivElement> =
    (): void => {
      setShowAddBlock((prev) => !prev);
    };

  const closeShowBlock = (state: boolean) => {
    setShowAddBlock(state);
  };

  const removeCategory = (e:React.MouseEvent<HTMLButtonElement>,id: number) => {
          e.stopPropagation()
    removeCat(id);
  };

  const changeCategoryParams=(e:React.MouseEvent<HTMLButtonElement>,id: number)=>{
        e.stopPropagation()
  
        setCurrentCat(id)
        setShowChangeBlock(prev=>!prev)
  
  }

  const changeCurrentValue=(e: React.ChangeEvent<HTMLInputElement>,name:string)=>{
    e.stopPropagation()
switch (name) {
  case 'color':
    setChangeParams(prev=>({...prev,color:e.target.value}))
    
    break;

  case 'text':
    setChangeParams(prev=>({...prev,name:e.target.value}))
    break;
}
  }

  const createChange=(e:React.MouseEvent<HTMLButtonElement>,id:number)=>{
    const result={
      ...changeParams,
      id
    }
    
   setShowChangeBlock(false)
   changeCatParams(result)
   setChangeParams(prev=>({
     ...prev,
     color:"",
     name:""
   }))
  }

  return (
    <>
    <div onClick={() => chnageCurrentCat('all',null)}
    
    style={{
      border: currentName === 'all' ? `3px solid red` : ""
    }}
    >All ({todoLength}) </div>
      {todo.map((el,i) => {
                
        return (
          <div
            onClick={() => chnageCurrentCat( el.name ,el.id)}
            key={el.id}
            style={{
              border: currentName === el.name ? `3px solid ${el.color}` : "",position:'relative'
            }}
          >
            <div
              style={{
                backgroundColor: el.color,
                fontSize: "5px",
                padding: "5px",

                borderRadius: "50%",
              }}
            ></div>
            <div>{el.name}</div> <span>({el.todos.length})</span>
            <div>
            {todo.length > 1 && (
                  
              <button onClick={(e) => removeCategory(e,el.id)}>X</button>
              
              
            )}
            

            
            <button onClick={(e) =>changeCategoryParams(e,el.id)}>!</button>
            {
            showChangeBlock && currentCat===el.id&&
            
            <div className={s.change_block} onClick={(e)=>e.stopPropagation}>
              <input type="color" onChange={(e)=>{changeCurrentValue(e,'color')}} value={changeParams.color}/>
               <input type="text" onChange={(e)=>{changeCurrentValue(e,'text')}} value={changeParams.name}/>
               <button onClick={(e)=>createChange(e,el.id)}>ok</button>
              </div>

             }
             
            </div>
          </div>
        );
      })}

      <div ref={chnageStateShowBlock}>
        <div onClick={changeShowAddBlock}>+</div>
        {showAddBlock && (
          <AddNewCat
            closeBlock={closeShowBlock}
            currentRef={closeAddBloc}
            chnageStateShowBlock={chnageStateShowBlock}
          />
        )}
      </div>
    </>
  );
};

export default DrowSideBar;
