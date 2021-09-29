import React from 'react'
import { useDispatchTS } from '../userHooks/useDispatchTS'
import { DrowList } from './DrowList'

export const Main:React.FC = ():React.ReactElement => {

        const {initalAction}=useDispatchTS()
 
        React.useEffect(()=>{
                initalAction()
        },[])

        return (
                <div>
                        <DrowList/>
                </div>
        )
}
