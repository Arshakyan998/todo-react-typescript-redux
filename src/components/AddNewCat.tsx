import React, { ReactChild, ReactNode } from "react";

import { ItoDo } from "../redux/types/types";
import { useDispatchTS } from "../userHooks/useDispatchTS";

interface Iref {
  current: HTMLDivElement | null;
}

interface Props {
  closeBlock: (state: boolean) => void;
  currentRef: Iref;
  chnageStateShowBlock: Iref;
}
interface Ivalues {
  text: string;
  color: string;
}

export const AddNewCat = React.forwardRef(
  ({
    closeBlock,
    currentRef,
    chnageStateShowBlock,
  }: Props): React.ReactElement => {
    const [inputValue, setInputValue] = React.useState<Ivalues>({
      text: "",
      color: "#E2CCCC",
    });

    const { createNewCategory } = useDispatchTS();

    const inputHendler = (
      e: React.ChangeEvent<HTMLInputElement>,
      name: string
    ): void => {
      switch (name) {
        case "color":
          setInputValue((prev) => ({ ...prev, color: e.target.value }));
          break;

        case "text":
          setInputValue((prev) => ({ ...prev, text: e.target.value }));
          break;
      }
    };

    const createNewCat: React.MouseEventHandler<HTMLButtonElement> =
      (): void => {
        const result: ItoDo = {
          id: Date.now(),
          name: inputValue.text,
          color: inputValue.color,
          todos: [],
        };
        if (inputValue.text !== "") {
          createNewCategory(result);
          closeBlock(false);
        }
      };
    const closeModal = (e: any): void => {
      if (!e.path.includes(chnageStateShowBlock.current)) {
        if (!e.path.includes(currentRef.current)) {
          closeBlock(false);
        }
      }
    };

    React.useEffect(() => {
      document.body.addEventListener("click", closeModal);
    }, []);

    return (
      <div ref={currentRef}>
        <input
          type="color"
          value={inputValue.color}
          onChange={(e) => inputHendler(e, "color")}
        />
        <input
          type="text"
          value={inputValue.text}
          onChange={(e) => inputHendler(e, "text")}
          maxLength={13}
        />
        <button onClick={createNewCat}>ok</button>
      </div>
    );
  }
);
