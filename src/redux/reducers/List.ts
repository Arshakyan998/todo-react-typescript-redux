import { IinitalState, actionTypes, actionsType } from "../types/types";

const initalState: IinitalState = {
  todo: [
    {
      id: 1,
      name: "Frontend",
      color: "green",
      todos: [
        {
          toDoId: 1,
          text: "Учить JS",
          isCompleted: false,
        },
      ],
    },
    {
      id: 2,
      name: "backend",
      color: "red",
      todos: [
        {
          toDoId: 1,
          text: "Учить node",
          isCompleted: false,
        },
      ],
    },
  ],
  currentTodoid: null,
};

export const list = (
  state = initalState,
  action: actionsType
): IinitalState => {
  switch (action.type) {
    case actionTypes.INITAL_ACTION: {
      return {
        ...state,
      };
    }
    case actionTypes.SERCH_RESULT: {
      return {
        ...state,
        currentTodoid: action.payload,
      };
    }
    case actionTypes.ADD_NEW_TODO: {
      const newItem = [...state.todo].filter((el) => {
        if (el.id === state.currentTodoid) {
          el.todos.push(action.payload);
        }
        return el;
      });

      return {
        ...state,
        todo: newItem,
      };
    }

    case actionTypes.CHANGE_COMPLETED: {
      const newItem = [...state.todo].filter((el) => {
        if (el.id === state.currentTodoid) {
          el.todos.filter((el) => {
            if (el.toDoId === action.payload) {
              el.isCompleted = !el.isCompleted;
            }
            return el;
          });
        }
        return el;
      });

      return {
        ...state,
        todo: newItem,
      };
    }
    case actionTypes.REMOVE_TODO: {
      const newItem = [...state.todo].filter((el, i) => {
        if (el.id === state.currentTodoid) {
          el.todos.forEach((element, i) => {
            if (element.toDoId === action.payload) {
              el.todos.splice(i, 1);
            }
          });
        }
        return el;
      });

      return {
        ...state,
        todo: newItem,
      };
    }
    case actionTypes.CREATE_NEW_CAT: {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    }
    case actionTypes.REMOVE_CAT: {
      const newItem = [...state.todo].filter((el) => el.id !== action.payload);
      return {
        ...state,
        todo: newItem,
      };
    }

    case actionTypes.CHANGE_CAT_PARAMS: {
      const { id } = action.payload;
      const result: any = action.payload;
      let currentChanges = {};

      Object.keys(result).forEach((el) => {
        if (result[el]) {
          const r = {
            ...currentChanges,
            [el]: result[el],
          };
          currentChanges = {
            ...r,
          };
        }
      });

      const newItem = [...state.todo].map((element) => {
        if (element.id === id) {
          element = {
            ...element,
            ...currentChanges,
          };

          return element;
        }

        return element;
      });

      return {
        ...state,
        todo: newItem,
      };
    }

    default:
      return state;
  }
};
