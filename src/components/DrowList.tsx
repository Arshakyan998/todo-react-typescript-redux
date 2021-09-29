import React from 'react'
import { useSelectorTS } from '../userHooks/useSelectorTS'

import DrowSideBar from './DrowSideBar'
import { DrowText } from './DrowText'
import s from './main.module.scss'



export const DrowList:React.FC = ():React.ReactElement => {

      


        return ( 
                <div className={s.main}>
                        <div className={s.main_content}>
                      <div className={s.main_content_sidebar}> 
                     
                          <DrowSideBar />
                      </div>
                      <div className={s.main_content_text}>

                          <DrowText/>
                       
                      </div>
</div>
                </div>
        )
}
