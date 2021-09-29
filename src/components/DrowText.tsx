import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useSelectorTS } from "../userHooks/useSelectorTS";
import { ItoDo, ItoDos } from "../redux/types/types";

import s from "./add.module.scss";
import { useDispatchTS } from "../userHooks/useDispatchTS";
import "./transition.scss";
import { DrowAllToDo } from "./DrowAllToDo";

export const DrowText: React.FC = (): React.ReactElement => {
  const { adddNewToDo, changeComplated, remmoveToDoItem } = useDispatchTS();

  const [currentTodo, setCurrentTodo] = React.useState<ItoDo>();

  const [addNewToDo, setAddNewToDo] = React.useState<string>("");

  const { todo, currentTodoid } = useSelectorTS((state) => state.list);

  const itemLength=todo.reduce((aggr,val)=>val.todos.length+aggr,0)
   
  React.useMemo(() => {
    if (currentTodoid) {
      const result = todo.find((el) => el.id === currentTodoid);
          
     setCurrentTodo(result);

            
    }else{
      setCurrentTodo(undefined)
    }
  }, [currentTodoid, itemLength]);

  const newToDohendler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setAddNewToDo(e.target.value);
  };
  const newToDo = () => {
    const result: ItoDos = {
      text: addNewToDo,
      isCompleted: false,
      toDoId: +Date.now(),
    };
    if (addNewToDo) {
      adddNewToDo(result);
      setAddNewToDo("");
    }
  };

  const changeComplited = (id: number): void => {
    changeComplated(id);
  };

  const removeToDo = (id: number): void => {
    remmoveToDoItem(id);
  };

  const keyHendler: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ): void => {
    if (e.key === "Enter") {
      newToDo();
    }
  };

  const complitedTodos = currentTodo
    ? currentTodo.todos.filter((el) => el.isCompleted)
    : [];
  const performedBy = currentTodo
    ? currentTodo.todos.filter((el) => el.isCompleted === false)
    : [];

  return (
    <div>
       {
         currentTodoid===null &&<DrowAllToDo/>
       }
      {currentTodo && (
        <>
          <h1>{currentTodo?.name}</h1>

          {currentTodo.todos.length > 0 ? (
            <TransitionGroup
              style={{
                boxShadow: `0px 0px 5px 5px ${currentTodo.color}`,
                overflowY: "auto",
                transition: "all 0.5s linear",
              }}
            >
              {[...performedBy, ...complitedTodos].map((el, i) => {
                return (
                  <CSSTransition
                    key={el.toDoId}
                    timeout={500}
                    classNames="item"
                    style={{ margin: "0 auto" }}
                    
                  >
                    <div>
                      <span>{i + 1}</span>
                      <button onClick={() => removeToDo(el.toDoId)}>X</button>
                      <label htmlFor={`data-${el.toDoId}`}>
                      <span>{el.text} </span>
                      </label>
                      <input
                        type="checkbox"
                        onChange={() => changeComplited(el.toDoId)}
                        checked={el.isCompleted}
                        id={`data-${el.toDoId}`}
                      />
                     

                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          ) : (
            <h1> Для этой категории ваш список пуст </h1>
          )}
        </>
      )}
      {currentTodo && (
        <div
          className={s.input_block}
          style={{ boxShadow: `${currentTodo.color} 0px -12px 12px -1px` }}
        >
          <input
            type="text"
            onChange={newToDohendler}
            value={addNewToDo}
            onKeyPress={keyHendler}
            maxLength={20}
            required={true}
          />
          <button onClick={newToDo}>ok</button>
        </div>
      )}
    </div>
  );
};
