import React from "react";

import { useSelectorTS } from "../userHooks/useSelectorTS";

import s from './alltodo.module.scss'

export const DrowAllToDo: React.FC = (): React.ReactElement => {
  const state = useSelectorTS((state) => state.list.todo);
  return (
    <div className={s.main_todo}>
      {state.map((element) => {
        return (
          <div key={element.id}>
            <div style={{boxShadow:`0px 0px 7px 9px ${element.color}`}} className={s.main_todo_contnet}>
              <h1>{element.name}</h1>
              <div>
                      {element.todos.length ?  
                element.todos.map((el, i) => {
                  return (
                    <div key={el.toDoId}>
                         <div>
                      <div>{i+1})</div>
                      <div>{el.text}</div>
                      <div>
                      <input
                        type="checkbox"
                        disabled
                        checked={el.isCompleted}
                      />{" "}
                      </div>
                      </div>
                    </div>
                  );
                }): <p>Список пуст</p> }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
