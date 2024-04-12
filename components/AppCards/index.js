import {formatDistanceToNow} from 'date-fns'
import { MdDelete } from "react-icons/md";
import './index.css'

const AppCardComponent=(props)=>{
const{myData,deleteCardFunction}=props
const{id,title,yourListData,dateTime}=myData

const delBtnClicked=()=>{
    deleteCardFunction(id)
}

    return(
<li className='liCl'>
    <div>
        <div className='cardContainer'>
         
        <h1 className='titleCL'>{title}</h1>
        <p className='dateTimeCl'>{formatDistanceToNow(dateTime)}</p>
        <hr className='hrBottomStyling'/>
        </div>


        <div className='yourTxtDel'>
        <p className='allTxt'>{yourListData}</p>
        </div>

        <button className='delCL' onClick={delBtnClicked}>
        <MdDelete className='mdDel'/>
        </button>


    </div>
    <hr />
</li>
    )
}

export default AppCardComponent
