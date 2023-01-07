import React,{useState} from 'react'
export default function TextForm(props) {

    //Funtion to change the text to upper case on clicking button
    const handleUpClick = ()=>{
        // console.log("upper case btn clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    //Funtion to change the text to lower case on clicking button
    const handleLowClick = ()=>{
        // console.log("upper case btn clicked");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearClick = ()=>{
        // console.log("upper case btn clicked");
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
//to handle event on changing text in box this funtion defined
    const handleOnChange = (e)=>{
        // console.log("On change");
        setText(e.target.value);
    }
//to copy text
    const handleCopy = () => {
      
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied", "success");
    }

    const handleExtraSpaces =() =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed", "success");
    }

    const [text,setText]= useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
{/* <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary my-2 mx-2' onClick={handleLowClick}>Convert to LowerCase</button> */}
<div className="dropdown">
  <button disabled={text.length===0} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Actions to perform
  </button>
  <ul className="dropdown-menu">
    <li><button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button></li>

    <li><button className='btn btn-primary my-2 mx-2' onClick={handleLowClick}>Convert to LowerCase</button></li>

    <li><button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button></li>

    <li><button className='btn btn-primary my-2 mx-2' onClick={handleExtraSpaces}>Remove extra space</button></li>

    
  </ul>
</div>
<button className='btn btn-primary my-2 mx-2' onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length}characters</p> */}
        
         {/* Condition to handle counting of intial space as word */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview."}</p>
    </div>
    </>
  )
}
