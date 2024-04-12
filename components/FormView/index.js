import {Component} from 'react'
import './index.css'

class FormViewComponent extends Component
{
state={titleTxt:"",txtAreaCon:"",formTrue:false}

didSubmit=(event)=>{
    event.preventDefault()
    const{gotDataFromForm}=this.props

    const{titleTxt,txtAreaCon,formTrue}=this.state
    const formContainerData={
        urTitle:titleTxt,
        urComment:txtAreaCon,
        formClose:formTrue
    }

    gotDataFromForm(formContainerData)

}

titleTxtFun=(event)=>{
    this.setState({titleTxt:event.target.value})
}
txtAreaFun=(event)=>{
    this.setState({txtAreaCon:event.target.value})

}

render(){
    const{titleTxt,txtAreaCon}=this.state
    return(
        <div className="mainFormDiv">

<form className='form' onSubmit={this.didSubmit}>
    <input type='text' value={titleTxt} placeholder='Enter your Title' onChange={this.titleTxtFun} className='inputTxtCl'/>
        <br/>
        <br/>
    <textarea className='araTxt' value={txtAreaCon} cols="20" rows="7" placeholder='Enter your Text' onChange={this.txtAreaFun}>
    </textarea>
    <br/>
    <br/>
<button type='submit' className='btnToAdd'>Add</button>
</form>

        </div>
    )
    
}
}

export default FormViewComponent