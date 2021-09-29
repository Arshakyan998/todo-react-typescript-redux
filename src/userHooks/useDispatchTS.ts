import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import * as actionCreaters from '../redux/actions/List'


export const useDispatchTS=()=>{
        const result={
                ...actionCreaters
        }
        
        const dispatch=useDispatch()
        return bindActionCreators(result,dispatch)
}