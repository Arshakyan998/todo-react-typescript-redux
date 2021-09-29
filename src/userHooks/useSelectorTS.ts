import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../redux/root";


export const useSelectorTS:TypedUseSelectorHook<rootState>=useSelector