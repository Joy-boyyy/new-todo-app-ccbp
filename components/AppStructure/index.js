import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import { IoAddCircleOutline } from "react-icons/io5";
import AppCardComponent from '../AppCards'
import FormViewComponent from '../FormView'
import './index.css'

const dummyData=[
    {id:1,title:"This is Dummy Title",yourListData:"Hi this is Dummy data",dateTime:new Date()},

];

class MyTodo extends  Component
{
    state={myTodoData:dummyData,isTrue:false,}

    addBtnClicked=()=>{
        this.setState({isTrue:true})
    }

    gotDataFromForm=(formObj)=>{
        const{urTitle,urComment,formClose}=formObj

        const originalData={
            id:uuid(),
            title:urTitle,
            yourListData:urComment,
            dateTime:new Date()
        }

        this.setState((preData)=>({myTodoData:[...preData.myTodoData,originalData],isTrue:formClose}))

    }

    deleteCardFunction=(ID)=>{

        const{myTodoData}=this.state

        const gotId =myTodoData.findIndex((findProp)=>findProp.id === ID)

        myTodoData.splice(gotId,1)

        this.setState({myTodoData:myTodoData})


    }


    render()
    {
        const{myTodoData,isTrue}=this.state
        return(
            <div className='mainDiv'>
                <h1>Your Todo Lists</h1>
                <div className='childBody'>                    
                    <button type="button" className='btnToAddNotes' onClick={this.addBtnClicked}>
                <IoAddCircleOutline className='iconCss'/>
                    </button>

{isTrue && <FormViewComponent gotDataFromForm={this.gotDataFromForm}/>}
<ul>

{myTodoData.map((mapProp)=>(<AppCardComponent key={mapProp.id} myData={mapProp} deleteCardFunction={this.deleteCardFunction}/>))}
</ul>

                </div>
            </div>
        )
    }
}
export default MyTodo